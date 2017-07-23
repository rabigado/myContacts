import React,{PropTypes} from 'react';
import { Link } from 'react-router';
import {cellTypeEnum} from './constants';
import Pagination from './Pagination';
import _ from 'lodash';
import $ from 'jquery';

class DynamicTable extends React.Component {
     constructor(props){
        super(props);
        this.state={
            currentPage:0,
            itemPerPage:5,
            pages:0,
            header:props.data && props.data.header || [],
            body:props.data && props.data.formatedData || [],
            headerFormatted:[],
            bodyFromatted:[],
            listLength:props.data && props.data.length
        };
        this.btnHandler = this.btnHandler.bind(this);
        this.setPagination = this.setPagination.bind(this);
        this.formatData = this.formatData.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    componentWillMount(){
        //Math.ceil((this.props.data.length-1)/this.state.itemPerPage)-1
        if(this.state.body && this.state.body.length){
            this.setState({pages:Math.ceil((this.state.body.length)/this.state.itemPerPage)-1});
        }
        if(this.state.body.length)
            this.formatData(this.state.body);
        if(this.state.header.length)
            this.formatHeader(this.state.header);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.data.header !== prevProps.data.header){
            this.formatHeader(this.props.data.header);
        }
        if(this.state.currentPage!=prevState.currentPage){
            this.formatData(this.props.data.formatedData);
            return;
        }
        if(this.props.data.formatedData.length !== prevProps.data.formatedData.length){
            this.formatData(this.props.data.formatedData);
            return;
        }

        if(this.props.listId)
            if(this.props.listId != prevProps.listId){
                this.formatData(this.props.data.formatedData);
                return;
            }else{
                return;//no changes were made.
            }

        for(let i = 0; i<this.props.data.formatData.length;i++){
            if(this.props.data.formatData[i]!==prevProps.formatData[i]){
                this.formatData(this.props.data.formatedData);
                break;
            }
        }

    }
    formatHeader(headerToFormat){
        let header = headerToFormat && headerToFormat.map( h=>{
                return(
                    <thead key={h.id}>
                        <tr>
                        {Object.keys(h).filter(k => k !== 'id').map(k => {
                                switch(h[k].type){
                                    case cellTypeEnum.HEADER:
                                        return (<th className="" key={Math.random().toString(36).substring(5)}><b>{h[k].text}</b> </th>);
                                    case cellTypeEnum.TEXT:
                                        return (<th className="" key={Math.random().toString(36).substring(5)}>{h[k].text} </th>);
                                    case cellTypeEnum.EDITBUTTON:
                                        return (<th className="" key={Math.random().toString(36).substring(5)}>
                                                    <button onClick={this.btnHandler.bind(this,h[k].id||"error")} className="btn btn-primary btn-block">  <span className="glyphicon glyphicon-edit"></span>  </button> 
                                                </th>);
                                    case cellTypeEnum.BUTTON:
                                        return (<th className="" key={Math.random().toString(36).substring(5)}>
                                                    <button onClick={this.btnHandler.bind(this,h[k].id||"error")} className="btn btn-primary btn-block"> {h[k].text} </button> 
                                                </th>);
                                    case cellTypeEnum.LINK:
                                        return (<th className="" key={Math.random().toString(36).substring(5)}><Link to={h[k].href} className=""  activeClassName="active">{h[k].text}</Link> </th>);
                                }
                        })} 
                        </tr>      
                    </thead>
                );
            });
            this.setState({headerFormatted:header});
    }
    formatData(arr){
        let chunkedList =[];
        if(this.props.pagination){
            chunkedList = _.chunk(arr,this.state.itemPerPage)[this.state.currentPage] || [];
        }else{
            chunkedList = arr;
        }
        let list = chunkedList.map(p =>{
            return (
                <tr className="" key={p.id}>
                        {Object.keys(p).filter(k => k !== 'id').map(k => {
                        switch(p[k].type){
                            case cellTypeEnum.HEADER:
                                return (<td className="" key={Math.random().toString(36).substring(5)}><b>{p[k].text}</b> </td>);
                            case cellTypeEnum.TEXT:
                                return (<td className="" key={Math.random().toString(36).substring(5)}>{p[k].text} </td>);
                            
                            case cellTypeEnum.EDITBUTTON:
                                        return (<td className="" key={Math.random().toString(36).substring(5)}>
                                                    <button onClick={this.btnHandler.bind(this,p[k].id||"error",'edit')} className="btn btn-primary btn-block">  <span className="glyphicon glyphicon-edit"></span>  </button> 
                                                </td>);
                            case cellTypeEnum.DELETEBUTTON:
                             return (<td className="" key={Math.random().toString(36).substring(5)}>
                                                    <button onClick={this.btnHandler.bind(this,p[k].id||"error",'delete')} className="btn btn-primary btn-block">  
                                                        <span className="glyphicon glyphicon-trash"></span></button> 
                                                </td>);
                            case cellTypeEnum.BUTTON:
                                return (<td className="" key={Math.random().toString(36).substring(5)}>
                                            <button onClick={this.btnHandler.bind(this,p[k].id||"error")} className="btn btn-primary btn-block"> {p[k].text} </button> 
                                        </td>);
                            case cellTypeEnum.LINK:
                                return (<td className="" key={Math.random().toString(36).substring(5)}><Link to={p[k].href} className=""  activeClassName="active">{p[k].text}</Link> </td>);
                            default:
                                return (<td className="" key={Math.random().toString(36).substring(5)}><div 
                                value={k} >{p[k].text}</div></td>);

                        }
                        })}
                </tr>
            );
        });
        this.setState({listLength:arr.length,bodyFromatted:list});
    }

    btnHandler(itemId,actionType){
        switch(actionType){
            case 'delete':
                this.props.handleDeleteBtnClick?this.props.handleDeleteBtnClick(itemId):this.props.handleBtnClick(itemId);
                return;
            case 'edit':
                this.props.handleEditBtnClick?this.props.handleDeleteBtnClick(itemId):this.props.handleBtnClick(itemId);
                return;
            default:
                this.props.handleBtnClick(itemId);
        }
        
    }

    setPagination(page){
        switch(page){
            case -2:
                if(this.state.currentPage < this.state.pages){    
                    this.setState({currentPage:this.state.currentPage+1});
                }
                    
                break;
            case -1:
                if(this.state.currentPage > 0)
                    this.setState({currentPage:this.state.currentPage-1});
                break;
            default:
                this.setState({currentPage:page});
        }
    }
    
    filterData(event){
        let items = Object.assign({},this.props.data.formatedData);
        items = _.filter(items,function(item){   
            for (let key in item) {
                if (item.hasOwnProperty(key)) {
                    if(typeof item[key] === 'object'){ 
                        if(item[key].text && item[key].text.toLowerCase().includes(event.target.value.toLowerCase()))
                            return true;
                    }
                }
        }});
        this.setState({listLength:items.length});
        this.formatData(items||[]);
    }

    render(){
          let tableStyle = {
               align:"center"
          };
       
          return (
               <fieldset className="step-4">
                    <div className="table-responsive">
                         {this.props.searchable?
                         (
                            <div className="input-group col-md-4">
                                <span className="input-group-addon" id="basic-addon1"><span className="glyphicon glyphicon-search"></span></span>
                                <input onChange={this.filterData} type="text" className="form-control" placeholder="filter items" aria-describedby="basic-addon1"/>
                                
                            </div>
                        )
                         :''}
                         <br />
                         <table className="table" cellSpacing="3" id="dymaictable" style={tableStyle}>
                              {this.state.headerFormatted}
                              <tbody>{this.state.bodyFromatted}</tbody>
                         </table>
                         {this.props.pagination?<Pagination length={this.state.listLength} itemPerPage={this.state.itemPerPage} currentPage={this.state.currentPage} handleClick={this.setPagination} />:''}
                    </div>
               </fieldset>
          );
     }
}

DynamicTable.propTypes = {
    handleBtnClick:PropTypes.func.isRequired,
    pagination:PropTypes.bool,
    searchable:PropTypes.bool,
    data:PropTypes.object.isRequired,
    itemPerPage:PropTypes.number,
    listId:PropTypes.number,//optional in order to quickly determin if changes were made and format data should be called again
    handleDeleteBtnClick:PropTypes.func,
    handleEditBtnClick:PropTypes.func

};

export default DynamicTable;