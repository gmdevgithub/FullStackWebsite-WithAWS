
//Basic imports
import React, {Component,useEffect} from 'react';
import axios from 'axios';



import MaterialTable from 'material-table';
import { createMuiTheme } from '@material-ui/core/styles';



// Email js !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import emailjs from 'emailjs-com';





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

    //table entries
    const [entries, setEntries] = useState({
        data: [
            {
                POid: "",
                associate: "",
                passwords: "",
                address: "",
                processingdate: "",
                salescomission: "",
              

    
            }
        ]
    });

    //table set of state
    const [state] = React.useState({
        columns: [
            { title: "POid", field: "POid" },
            { title: "associate", field: "associate" },
            { title: "passwords", field: "passwords" },
            { title: "address", field: "address" },
            { title: "processingdate", field: "processingdate" },
            { title: "salescomission", field: "salescomission" },
          
        

          
           
        ]
    });

    // useEffect ()
    useEffect(() => {
        axios
        .get("http://localhost:8080/getsalesaws")
        .then(response => {
        let data = [];
    response.data.forEach(el => {
        data.push({

            
            POid: el.POid,
            associate: el.associate,
            passwords: el.passwords,
            address: el.address,
            processingdate: el.processingdate,
            salescomission: el.salescomission,
          
          

           
        });
    });
    setEntries({ data: data });
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
  

  
    

      
    // 2nd table data !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const [entries2,setData2] = useState({
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
    




    // 2nd table entires !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const [state2 ,setEntries2] = React.useState({
        columns: [
            { title: "Poid", field: "Poid", 
            editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )},
            { title: "associate", field: "associate" , editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            ) 
            },
            { title: "passwords", field: "passwords" , editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />) 
            },
            { title: "address", field: "address" , editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )  },
            { title: "processingdate", field: "processingdate" , editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )  },
            { title: "salescommission", field: "salescommission"  , editComponent: props => (
                <input
                    style = {{backgroundColor: "white"}}
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            ) },
            
    
           
            
      
          

           
        ]
    });



    

    // 2nd use effect 
    useEffect(() => {
        axios
        .get("http://localhost:8080/getquoteaws")
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
    setData2({ data: data });
    })
    .catch(function(error) {
        console.log(error);
    });
    }, []);


     // Send email function 
     function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_iqx2obn', 'template_ig9u9mb', e.target, 'user_tsBdXLyxdJz05kQ2EPswb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


    





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
               title="Current Sales Associates"
               columns={state.columns}
               data={entries.data}
               
               
           />
            </div >


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








               //This is where our crap at the top goes for states and entries 
               title="CRUD for Sales associates"
               columns={state2.columns}
               data={entries2.data}





               editable={{


                   //This is where the edit, add , update stuff goes 
                   onRowAdd: (newData) =>
                       new Promise(resolve => {
                           setTimeout(() => {
                               resolve();
                               const data = [...newData.data];
                               data.push(newData)
                               setData({ ...state, data });
                           }, 600);
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
                               .delete("http://localhost:8080/getquoteaws", {
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

        



          
          
       </div>
           


            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 500 } } />

  
        

            <Footer/>

        </div>
        
    )
    

};

export default SalesAdminDash;

