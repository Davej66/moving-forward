![image](https://user-images.githubusercontent.com/85559896/167136730-59380342-5ed8-454f-b53d-5c143bee7165.png)

# **Moving Forward** 

Moving Forward is a website to allow users to donate or buy locally produced or sourced items with the the profits from these purchases being re-invested into the local commumities and charity groups in the Cape Town area of the Western Province.

# **UX**

## Visitor Goals

- First Time Visitor Goals
- As a First Time Visitor, I want to easily find a fitness plan I want to start.
- As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
- As a First Time Visitor, I want to look for reviews to understand what their users think of them and see if they are trusted.

- Returning Visitor Goals
- As a Returning Visitor, I would like to write a review about a plan I have recently followed from the online store.
- As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.
- As a Returning Visitor, I would like to edit a plan review I added to the website.
- As a Returning Visitor, I would like to Remove a book review I added to the website.
- As a Returning Visitor, I would like to delete a review I left on a plan/purchase.

# **User Stories**

## **User**
- As a user I want to be able to purchase items that I like.
- As a user I want to be able to shop with confidence and pay with my card directly not through a third party site.
- As a user I want to be able to donate with confidence and pay with my card directly not through a third party site.

## **Admin**
- As a user I want to be able to add products easily.
- As a user I want to ensure an authenticated user can access all required information correctly.
- As a user I want to include options for the admin to quickly edit the site.

## **Developer**
- As a user i want to ensure the user can't break the flow of the site with correct defensive design choices.
- As a user i want to ensure an authenticated user can access all required information correctly.
- As a user i want to include options for the admin to quickly edit the site.


## **Colours**

I wanted to select a minimal range of colours not to overwhelm but to compliment the selcted background image selecting #ADD8E6 produced the desired effect without compromising the website.

![image](https://user-images.githubusercontent.com/85559896/167144643-078a40eb-a591-47fd-b0f5-5d351308400a.png)

## **Fonts**

The Lato font was selected for its clean and business like style for the website.


## **Wireframe**

### [Link to wireframes](https://github.com/Davej66/moving-forward/blob/main/WIREFRAMES.MD)

## **Freatures**

### Existing Features

##### Store

A range of locallly sourced goods and donations that the profit from goes to these groups, purchasing is a seamless process within the website. 

##### Clients

Clients that register, their details are recorded and can be updated and are used to prefill where required for new orders. Previous purchases are listed in their profile page.

### Future Features

##### Clients

- Clients to be able to add a profile picture.
- Add additional information such as hobbies and skills, and when selected by the client this information would be available on a community page. To exchange social or commercial assisatnace to other memebers and to the groups supported by the website.
- To be able to contact the local groups and store these messages.
- Facetime or similiar these groups.
- This greater interaction will allow those clients who have skills or time to offer additional help to these groups.

Develope greater links to the individual charities and local groups to the customer to create greater bonds.


## **Technology Used**

### Languages

- HTNL
- CSS
- Javascript
- [Python](https://www.python.org/downloads/)

### Frameworks

- [Django](https://www.djangoproject.com/)
- [Bootstrap]https://getbootstrap.com/)

### Libraries

- [Jquery]https://jquery.com/)
- [Stripe](https://stripe.com/gb)

### Tools

- [Amazon S3](https://aws.amazon.com/)
- [Heruko](https://www.heroku.com/) 
- [Github](https://github.com/) 
- [Postgres](https://www.postgresql.org/)

## **Testing**

### [Link to Testing](https://github.com/Davej66/moving-forward/blob/main/TESTING.md)
 
## **Bugs**

Working on

## Unresolved Issues
- Items can be increased beyond the 99 limit in the shopping bag, this would have to additional code before going live.
- When Donations are purchase and the total shopping bag is less then £50 so a delivery is added, this too would require further coding before going live.

# **Deployment**

The site can be deployed locally using VsCode IDE, deployed on Heroku using Amazon W3 for the the hosting of static and media files. The site will automatically update with commits to the main branch, the code will contiue to run locally. A temporary issue has arised with automatic deployment from commits due a breach with heroku this is currently being investigated and be resolved. 

## Deployment Requirements

- [GitPod](https://gitpod.io/) with VsCode - Local development tool
- [Python](https://www.python.org/downloads/) Documentation is based on Python v3.8
- [PIP3] PIP package installer 
- [Stripe](https://stripe.com/gb) Payment infrastructure
- [Amazon S3](https://aws.amazon.com/) Media Storage
- [Heruko](https://www.heroku.com/) Cloud Platform


## Deploying Locally

1. In the repository click on the "use this template" it will open in a new window with you being required t give the new repository a name. Select public or private and then the create button.
2. When the new repository has been created select Gitpod to open.
3. When this completes you will be required to import the requirememts using te following;

&emsp;&emsp;&emsp;pip3 install -r requirements.txt

5. Within the root dir called env.py, in this file add the following lines to set up the environmental variables.

 &emsp;&emsp;&emsp;import os

 &emsp;&emsp;&emsp;os.environ["SECRET_KEY"] = "[Your Secret Key]"
 
 &emsp;&emsp;&emsp;os.environ["DEV"] = "1"
 
 &emsp;&emsp;&emsp;os.environ["HOSTNAME"] = "0.0.0.0"
 
 &emsp;&emsp;&emsp;os.environ["STRIPE_PUBLIC_KEY"] = "[Your Stripe Key]"
 
 &emsp;&emsp;&emsp;os.environ["STRIPE_SECRET_KEY"] = "[Your Stripe Secret Key]"
 
 &emsp;&emsp;&emsp;os.environ["DATABASE_URL"] = "[Your DB URL]"

### Database

1. To set up your database you will first need to run the following command.

&emsp;&emsp;&emsp;python manage.py migrate

3. To create a super user to allow you to access the admin panel run the following command in your terminal and complete the required information as prompted.

&emsp;&emsp;&emsp;python manage.py createsuperuser

4. From there you should now be able to run the server using the following command.

&emsp;&emsp;&emsp;python manage.py runserver

5. Next close the server in your terminal using ctrl+c (cmd+c on mac) and run the following commands to populate the database.

&emsp;&emsp;&emsp;python3 manage.py loaddata store/fixtures/categories.json

## Deploying To Heroku

To run this application in an online environment you will need to deploy the code to Heroku. Before moving on to this section please ensure you have followed the instructions for local deployment and this has been successful

1.	Either create an account at [Heruko](https://www.heroku.com/) or log in to your account.
2.	Set up a new app under a unique name.
3.	In the resources section, in the addons field type the below command and select the free cost option.

###### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;heroku Postgres

4.	in the settings tab select Reveal Config Vars and copy the pre populated DATABASE_URL into your settings.py file in your project.
5.	in the Config Vars in Heroku you will need to populate with the following keys.

##### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Key&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Value

###### &emsp;AWS_ACCESS_KEY_ID&emsp;&emsp;&emsp;&emsp;&emsp;[your value]

###### &emsp;AWS_SECRET_ACCESS_KEY&emsp;&emsp;[your value]

###### &emsp;DATABASE_URL&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[your value]

###### &emsp;EMAIL_HOST_PASS&emsp;&emsp;&emsp;[your value]

###### &emsp;EMAIL_HOST_USER&emsp;&emsp;&emsp;[your value]

###### &emsp;SECRET_KEY&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[your value]

###### &emsp;STRIPE_PUBLIC_KEY&emsp;&emsp;&emsp;[your value]

###### &emsp;STRIPE_SECRET_KEY&emsp;&emsp;&emsp;[your value]

###### &emsp;STRIPE_WH_SECRET&emsp;&emsp;&emsp;[your value]

###### &emsp;USE_AWS&emsp;&emsp;&emsp;TRUE

6.	Now this has been configured you will now migrate the local database to the cloud database using the migrate command as below.

###### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;python manage.py migrate

7.	Next you will need to create a super user and populate the database as described in the database set up section.
8.	When3.	From here select the Github option and connect the repository from GitHub and select the branch (Master) to deploy from. the migrations and data has been       loaded, in your Heroku dashboard select the Deploy tab.
9.	It is advised to select automatic deployment to ensure for each push to Github the hosted version is up to date.
10.	When this has deployed select open app from the top bar of the Heroku App.


# Credits

## Media

Images have been sourced from PEXEL or from the developer.

## Acknowledgements

* Richard Wells for his continuing inspirational support, guidance and input.

## **Disclaimer**

All images & content used for this site are for educational purposes only, and have been sourced from pexel or the developers own library.
