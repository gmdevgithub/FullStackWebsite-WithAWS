
//Basic imports
import React, {Component} from 'react';
import axios from 'axios';



import MaterialTable from 'material-table';
import { createMuiTheme } from '@material-ui/core/styles';




//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";


import Header from "./Header.js";
import Footer from "./Footer.js";



const SalesAdminDash = () => {

    const { useState } = React;

    
    const [columns, setColumns] = useState([
        {
            title: 'name', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'city', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'street', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'contact', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'number', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'price', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'description', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'quote', field: 'quote',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'secretnote', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        {
            title: 'email', field: 'name',
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        
        
    ]);

    const [data, setData] = useState([
        { name: 'Gio', quote:'Yes, this is a really really really really really really really realy longgggggggg multiline quote like in the project description' },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);

    
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#4caf50',
          },
          secondary: {
            main: '#ff9100',
          },
        },
        minWidth: 650,
    
      });
  

  

    return (

         

        <div className="App">

            <Header/>

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 30 } } />

            <h1> Sales Admin</h1>

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 100 } } />

            <div style={{ marginLeft: "125px", maxWidth: "80%", alignContent: "center" }}>
           
            <MaterialTable 
                style = {{ 
                    color: "white" , 
                    backgroundColor: "#6930c3", 
                    borderColor: "teal",
                    border: "solid",
                    height: '500px'
                   
                    
                 }}
                 options={{
                    actionsColumnIndex: -1,
                    actionsCellStyle:
                    {
                        color: "#72EFDD",
                        backgroundColor: "black"

                    },
                    headerStyle:
                    {
                     backgroundColor:'black',
                     color: '#72EFDD',

                    },
                    rowStyle: 
                    {
                    backgroundColor: 'black',
                    
                    },
                    searchFieldStyle: 
                    {
                    backgroundColor: '#72EFDD',
                    border: "solid",
                    borderColor: "black",
                    
                    },
                   
                    }}
                title="Add, Edit, Update, Delete"
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve();
                            }, 1000)
                        }),
                }}
            />

            </div >


            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 500 } } />

  
        

            <Footer/>

        </div>
        
    )
    

};

export default SalesAdminDash;

