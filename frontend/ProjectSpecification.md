
# Quote System - Problem Statement

 ## As a group of software engineers with a company that sells plant repair services via a network of sales people, you are tasked to build a new system that enables the sales force to record their quotes via the Internet.

 1 The system will maintain a database of sales associates, 
 
 2 Handle the recording of sales quotes,

 3 establish and fulfill purchase orders
 
 4 The system will also assign sales commissions for the sales associate.

A sales associate is presented with a custom quote tracking program which can be run anywhere on an Internet platform.
* Mobile friendly ?

# 1
 ### After the associate logs in (s)he can enter sales quotes for customers. Quotes are entered for existing customers, their information is maintained in a company legacy database with customer name, address, and contact info (details provided later). 
 
 A quote consists of multiple line items. Each line item has a free form description and a price. The associate can also attach secret notes of free form text. 
 
 * The quote is entered into a new quote database. 
 
 The associate also attaches a customer e-mail address to the quote, which is used as e-mail destination for communication as the quote is processed. The associate can edit quotes until (s)he finalizes the quote.


# 2
### The second interface to the system runs in-house at company headquarters: finalized quotes can be retrieved, line items added, edited or removed, and prices can be changed. A discount can be given either as percentage or amount. All line items and the discount are computed into the final price quoted. The secret notes added by the sales associate can be reviewed, and new ones added. The quotes are updated in the quote database: either left unresolved, or sanctioned. Sanctioned quotes are considered complete and sent out via e-mail to the customer. The email contains all quote data except the secret notes.

# 3
### The third interface (also in-house) allows to convert a quote into a purchase order once the customer has indicated to go ahead with the order (the go ahead is given outside of the scope of this system, e.g. via phone or snail mail). At this time an additional final discount can be entered. The final amount is computed. The purchase order is then sent to an external processing system (details provided later) which answers with a processing date and sales commission rate for the sales associate. The commission is computed and recorded for the quote and in the sales associate’s accumulated commission. An email is sent to the customer with all the purchase details, including the processing date.

# 4
### And lastly, there will be an administrative interface to maintain sales associate and quote information. Sales associate information contains their name, user id, password, accumulated commission, and address. The interface allows to view, add, edit and delete sales associate records. It also allows to search and view quotes based on status (finalized, sanctioned, ordered), date range, sales associate, and customer




(Form) ( FRONT END ) 
Login




EXTRACT ( PULL FROM THE DB HE GAVE US FOR CUSTOMERS / PARTS ) ( BACK END )







CREATE OUR DATABASE? ( MODEL OUR DATABASE BASED ON THE COMBINED CUSTOMER / PART DATA ) ( BACK END )

What needed for form / BD mdoel :

Quote Table:
Customer Fname
Customer Lname
Part number 
Amount
Discount
Notes
Customer Email



What needed for PO table ?:
finalized ?
sanctioned ?
ordered  ?
date range ?
sales associate ?




EDITING ( Nested table ) ( EDIT FROM OUR DATABASE ) ( FRONT END )

Sales assocoiate can do GET, EDIT, DELETE in material table to work with backend database ( is ours ? ) 





ENTERING ( Form ) ( SENDING QUOTE DATA TO OUR DATA BASE ) ( FRONT END )

1 Quotes are entered for existing customers, their information is maintained in a company legacy database with customer name, address, and contact info (details provided later).
A quote consists of multiple line items. Each line item has a free form description and a price. The associate can also attach secret notes of free form text. ( HIDDEN HTML OPTION)

2 The associate also attaches a customer e-mail address to the quote, which is used as e-mail destination ( WE HAVE TO SEND THIS TO GMAIL OR SOMETHING )for communication as the quote is processed. 

3 The associate can edit quotes until (s)he finalizes the quote.

* The quote is entered into a new quote database. 

4 A discount can be given either as percentage or amount. All line items and the discount are computed into the final price quoted. 

5 The secret notes added by the sales associate can be reviewed, and new ones added. 

6 The quotes are updated in the quote database: either left unresolved, or sanctioned. Sanctioned quotes are considered complete and sent out via e-mail to the customer. 
The email contains all quote data except the secret notes.




( NEED CONFIRMATION FROM GMAIL ) ( QUOTE IS THEN CONVERTED TO PO ) ( BACK END )
Allow to convert a quote into a purchase order once the customer has indicated to go ahead with the order (the go ahead is given outside of the scope of this system, e.g. via phone or snail mail). 




( PO stuff ) ( FRONT END )
1 At this time an additional final discount can be entered. The final amount is computed. 

2 The purchase order is then sent to an external processing system (details provided later) which answers with a processing date and sales commission rate for the sales associate. 

3 The commission is computed and recorded for the quote and in the sales associate’s accumulated commission. An email is sent to the customer with all the purchase details, including the processing date.





( ADMINISTRATIVE INTERFACE ) ( FRONT END )
To maintain sales associate and quote information. Sales associate information contains their name, user id, password, accumulated commission, and address. 

The interface allows to view, add, edit and delete sales associate records. 

It also allows to search and view quotes based on status ( finalized, sanctioned, ordered ), date range, sales associate, and customer