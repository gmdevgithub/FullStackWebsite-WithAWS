
//Basic imports
import React, {Component, useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import { createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';



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


/* axios.get('http://localhost:8080/getaws')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }); */



 



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



    const [entries, setEntries] = useState({
        data: [
            {
                partnumber: "",
                customernumber: "",
                firstname: "",
                city: "",
                street: "",
                contact: "",
                quote: "",
                price: "",
                descriptions: "",
                discount: "",
                secretnote: "",
                email: "",
                sanctioned: ""
    
    
    
    
            }
        ]
    });
    
    const [state] = React.useState({
        columns: [
            { title: "partnumber", field: "partnumber" },
            { title: "customernumber", field: "customernumber" },
            { title: "firstname", field: "firstname" },
            { title: "city", field: "city" },
            { title: "street", field: "street" },
            { title: "contact", field: "contact" },
            { title: "quote", field: "quote" },
            { title: "price", field: "price" },
            { title: "descriptions", field: "descriptions" },
            { title: "discount", field: "discount" },
            { title: "secretnote", field: "secretnote" },
            { title: "email", field: "email" },
            { title: "sanctioned", field: "sanctioned" }
    
           
            
      
          

           
        ]
    });
    
    
    
    useEffect(() => {
        axios
        .get("http://localhost:8080/getaws")
        .then(response => {
        let data = [];
    response.data.forEach(el => {
        data.push({
            partnumber: el.partnumber,
            customernumber: el.customernumber,
            firstname: el.firstname,
            city: el.city,
            street: el.street,
            contact: el.contact,
            quote: el.quote,
            price: el.price,
            descriptions: el.descriptions,
            discount: el.discount,
            secretnote: el.secretnote,
            email: el.email,
            sanctioned: ""
            
           
        });
    });
    setEntries({ data: data });
    })
    .catch(function(error) {
        console.log(error);
    });
    }, []);






    
          


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

    


    const [entries2,setData] = useState({
        data: [
            {
                partnumber: "",
                customernumber: "",
                firstname: "",
                city: "",
                street: "",
                contact: "",
                quote: "",
                price: "",
                descriptions: "",
                discount: "",
                secretnote: "",
                email: "",
                sanctioned: ""
    
    
    
    
            }
        ]
    });
    
    const [state2 ,setEntries2] = React.useState({
        columns: [
            { title: "partnumber", field: "partnumber" },
            { title: "customernumber", field: "customernumber" },
            { title: "firstname", field: "firstname" },
            { title: "city", field: "city" },
            { title: "street", field: "street" },
            { title: "contact", field: "contact" },
            { title: "quote", field: "quote" },
            { title: "price", field: "price" },
            { title: "descriptions", field: "descriptions" },
            { title: "discount", field: "discount" },
            { title: "secretnote", field: "secretnote" },
            { title: "email", field: "email" },
            { title: "sanctioned", field: "sanctioned" }
    
           
            
      
          

           
        ]
    });



    useEffect(() => {
        axios
        .get("http://localhost:8080/getaws")
        .then(response => {
        let data = [];
    response.data.forEach(el => {
        data.push({
            partnumber: el.partnumber,
            customernumber: el.customernumber,
            firstname: el.firstname,
            city: el.city,
            street: el.street,
            contact: el.contact,
            quote: el.quote,
            price: el.price,
            descriptions: el.descriptions,
            discount: el.discount,
            secretnote: el.secretnote,
            email: el.email,
            sanctioned: ""
            
           
        });
    });
    setData({ data: data });
    })
    .catch(function(error) {
        console.log(error);
    });
    }, []);

    
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
               columns={state.columns}
               data={entries.data}
               
               
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
                columns={state2.columns}
                data={entries2.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...entries2.data, newData]);
                               

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...entries2.data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000)
                        }),
                        onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                            resolve();
                            const data = [...entries2.data];
                            entries2.data.splice(entries2.data.indexOf(oldData), 1);
                            axios
                                .delete("http://localhost:8080/getaws", {
                                    params: {
                                        partnumber: entries2.data[0].partnumber
                                    }
                                })
                                .then(res => console.log(res.data));
                            setEntries({ ...entries2, data });
                        }, 600);
                    })
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

