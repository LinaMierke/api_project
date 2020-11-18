# Introduction

This porject was created using the data information from : 

*https://restcountries.eu/rest/v2/all*

The countries database contains a lib folder, where you can find the data, connections, schemas and routes. Each section contains a variety levels of code that will allow the user to understand how to conect to the localhost:4000 and access to it. 


# Objectives: 

1. Create a database about countries.
2. Have an accesible Api source for future projects
3. Understand MongoDB-express and Node

# CRUD Functionality

|      URL                |  Path        |  Method       |   Action |   Description                 |
|-------------------------|--------------|---------------|----------|-------------------------------|
|       "/"               |   /          |   GET         |  #index  |  List all items of countries  |
| "/c/:capital"       |   /capital    |   GET         |  #index  | Show resources by capital name |
| "/capital"           |   /capital      |   GET         |  #index  | Show all capitals  
|       "/"               |   /          |   POST        |  #Create | Create a new country        |
| "/:capital"         |   /capital     |   PATCH / PUT |  #Update | Update Capital name            |
| "/delete/:population"           |   /population       |   DELETE      | #destroy | Delete by population                 |
|       "/"               |   /          |   GET         |  #index  | List all 


# Documentation

The base data was obtained from https://restcountries.eu, there the Api endpoint was All and I abstracted the info by Command+s and added as a Json documment to the project. 


# License

Private License

