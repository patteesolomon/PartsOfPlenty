Project Details

 
🔴 Mandatory To Pass:
MVP - Minimum Viable Product Your App Must Posess All 7 RESTful Routes
URL	HTTP Verb	Action	Notes/ Examples
# /products/GET	index
INDEX when a user types localhost:3000/products
 in browser this route shows a list or index of all products
# /products/new	GET	new	
NEW when a user types localhost:3000/products/new in browser this route shows the user a form to create a NEW fruit
# /products/:id	DELETE	
destroy	DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to delete a product
# /products/:id	PUT	update
	UPDATE initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to Update data about a product
# /products	POST create	
CREATE initiates a post request through a form submission with action = http://localhost:3000/products/and allows the application the ability to Createa product
# /products/:id/edit GET
	edit	EDIT when a user types localhost:3000/products/:idOfProduct/edit in browser shows the user a form to edit a product
# /products/:id	GET	show	
# SHOW when a user types localhost:3000/products/:idOfProductshows the user an Individual fruit in the browser

 

# Index Page
# Your app should have an index page where

# all the products are displayed
# the images link to the product's show page
# and there should be a link to add a new product.
 

# Show Page
# Your show page should display a product with

# a link back to the products
# a link to edit the product (goes to the edit page)
# a delete button that deletes
# Example: 
# If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals in jsx).
# On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.
# The BUY button should also not be rendered if the quantity of the item is zero
# New & Edit Page
# These views should render forms and submit to the appropriate routes.

# Redirects
# The create route should redirect to the index
# The delete route should redirect to the index
# The update route will redirect back to the product's show page.

# Technical Requirements
# Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

# Must contain all 7 Restful Routes.
# Must be styled and look like a store.
# You MUST have a well documented README file in your repo. PLEASE add this README.md file on your own NOT through GitHub... Trust me...  
# In lieu of presentations, you MUST create a video (on YouTube, Vimeo, etc...) of you showcasing your application and code. This video needs to be in your README file, and must be at least 3 minutes long.