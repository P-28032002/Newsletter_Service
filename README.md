# Newsletter_Service
A Newsletter Service which will send a pre-defined content to the subscribed users of specific domain of interest at specific time intervals.

## Technologies Used
HTML

CSS and BootStrap

JavaScript

Nodejs

MySQL

## Setup
```
Database Setup

Newsletter Table (Stores data of subscribed users)
Database Name :- nodeapp.
Table Name :- newsletter.

Query to create table :-
CREATE TABLE `nodeapp`.`newsletter` (
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(50)  NOT NULL,
  `topics` int(10)
);

Topics Table (Stores pre-defined data according to area of interest of users)
Database Name :- nodeapp.
Table Name :- topics.

Query to create table :-
CREATE TABLE `nodeapp`.`topics` (
  `topics_id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `description` varchar(500)
);

First Clone the project on our local machine 
Command :
git clone https://github.com/P-28032002/Newsletter_Service.git

Open the folder in one of your IDE

Open new terminal and type the command 
node app.js

You're good to go !!! :)
```
## Database Setup
### Newsletter table 

<img src="/Results/table_newsletter.jpg">

### Topics table

<img src="/Results/table_topics.jpg">

## Results

### Newsletter signup page

<img src="/Results/Newsletter_UI.jpg">

## Users subscribed to our Newsletter Service 

### Pratham Madhani

<img src="/Results/Pratham_Madhani_signup.jpg">

### Parth Sharma 

<img src="/Results/Parth_Sharma_signup.jpg">

### Parul Madhani

<img src="/Results/Parul_Madhani_signup.jpg">

### Yashaswi Madhani

<img src="/Results/Yashaswi_Madhani_signup.jpg">


### User subscribed successfully to the Newsletter service

<img src="/Results/Subscribed_successfully.jpg">

## Emails

I have used prathammadhani@gmail.com gmail ID as newsletter service mail. Parth Sharma (prathammadhani28@gmail.com) subscribed to the sports as domain of interest,
so our newsletter service has sent him the pre-defined sport news after every one minute (specific time interval).

<img src="/Results/Parth_Sharma_output.jpg">

Pratham Madhani(prathamadhani28@gmail.com) subscribed to Science and Fiction as domain of interest, so our newsletter service has sent him the 
pre-defined information related to science and fiction after every one minute (specific time interval).

<img src="/Results/Pratham_Madhani_output.jpg">

<img src="/Results/Pratham_Madhani_output1.jpg">

<img src="/Results/Pratham_Madhani_output2.jpg">

<img src="/Results/Pratham_Madhani_output3.jpg">




