
//Basic imports
import React, {Component} from 'react';
import MaterialTable from 'material-table';
import { createMuiTheme } from '@material-ui/core/styles';

import emailjs from 'emailjs-com';





//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from '@material-ui/core/Icon';
import '../css/homepage.css';

//Custom components 
import Header from "./Header.js";
import Footer from "./Footer.js";

/* Quote Table:
Customer Fname
Customer Lname
Part number 
Amount
Discount
Notes
Customer Email */






const SalesDash = (props) => {

    const { useState } = React;

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_iqx2obn', 'template_ig9u9mb', e.target, 'user_tsBdXLyxdJz05kQ2EPswb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
          


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

        <div class="salesdash">
            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 100 } } />

            <h1 style= {{ textAlign: "center"}}> Sales Associate Page</h1>

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 40 } } />

            
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>

           <div  style={{ marginLeft: "125px", maxWidth: "80%", alignContent: "center" }}>
           
           <MaterialTable 
               style = {{ 
                   color: "#6930c3" , 
                   backgroundColor: "black", 
                   borderColor: "teal",
                   border: "solid",
                   height: '500px',
                   
                  
                   
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
                   borderColor: "#6930c3",
                   
                   },
                  
                   }}
               title="Current quotes"
               columns={columns}
               data={data}
               
               
           />

           </div >
           </div >

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 100 } } />
            

            <div class="salesdash2">
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
                    exportButton: true,
                    exportCsv: (columns, data) => {
                        sendEmail(data);
                    },
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

         


            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 500 } } />
           
        </div>
        </div>
        <Footer/>

        </div>
        
    )
    

};

export default SalesDash;

