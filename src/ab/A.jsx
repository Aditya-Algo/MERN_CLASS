import React from 'react'

export default function A() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aditya's SWE solutions</title>
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            background-image: url('https://via.placeholder.com/1920x1080'); /* Set your background image here */\n            background-size: cover;\n            background-position: center;\n            font-family: 'Arial', sans-serif;\n            color: white;\n        }\n\n        header {\n            background-color: rgba(0, 123, 255, 0.8); /* Transparent background */\n            color: white;\n            padding: 40px 0;\n            text-align: center;\n        }\n\n        .card {\n            border-radius: 10px;\n            margin-bottom: 20px;\n            cursor: pointer;\n            transition: transform 0.3s ease;\n        }\n\n        .card:hover {\n            transform: scale(1.05);\n        }\n\n        .card-img-top {\n            border-radius: 10px 10px 0 0;\n        }\n\n        .card-body {\n            padding: 15px;\n        }\n\n        .container {\n            margin-top: 50px;\n            color: rgba(10, 10, 10, 0.89);\n        }\n\n        .table-container {\n            margin-top: 30px;\n        }\n\n        .login-form-container {\n            margin-top: 50px;\n            display: none; /* Hidden by default */\n        }\n\n        .login-form {\n            max-width: 400px;\n            margin: 0 auto;\n            padding: 20px;\n            border: 1px solid #ccc;\n            border-radius: 10px;\n            background-color: #fff;\n        }\n\n        .login-form input {\n            margin-bottom: 15px;\n        }\n\n        .services-container {\n            display: none;\n            margin-top: 30px;\n        }\n\n        .modal-body p {\n            font-size: 1.2rem;\n        }\n\n        .footer {\n            background-color: #007bff;\n            color: white;\n            text-align: center;\n            padding: 20px;\n            position: fixed;\n            bottom: 0;\n            width: 100%;\n        }\n\n        .btn-custom {\n            background-color: #007bff;\n            color: white;\n        }\n\n        .alert {\n            font-size: 1.1rem;\n        }\n    "
    }}
  />
  {/* Header Section */}
  <header>
    <h1 className="display-4">Welcome to Aditya's SWE solutions</h1>
    <p className="lead">
      Explore a range of services offered with modern technologies and
      solutions.
    </p>
    <button className="btn btn-light btn-lg" id="mernstack-btn">
      Explore MERN Services
    </button>
    <button className="btn btn-light btn-lg" id="login-btn">
      Login
    </button>
  </header>
  {/* Login Form Section */}
  <div className="container">
    <div className="login-form-container" id="login-form-container">
      <div className="login-form">
        <h3 className="text-center">Login</h3>
        <form id="loginForm" onsubmit="return handleLogin(event)">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required=""
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
  {/* Services Section */}
  <div className="container services-container" id="services-container">
    <h2 className="text-center mb-4">Our Premium Services</h2>
    <div className="row" id="serviceCardsContainer">
      {/* Service cards will be dynamically generated here */}
    </div>
    {/* Pricing Table */}
    <div className="table-container">
      <h3 className="text-center">Our Services Pricing</h3>
      <table className="table table-bordered" id="pricingTable">
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="serviceList">
          {/* Service list will be dynamically generated here */}
        </tbody>
      </table>
    </div>
  </div>
  {/* CRUD Section */}
  <div className="container" id="crud-container">
    <h2 className="text-center mb-4">Manage Services</h2>
    <div className="crud-form">
      <h3 className="text-center">Add / Update Service</h3>
      <form id="serviceForm" onsubmit="return handleServiceSubmit(event)">
        <div className="form-group">
          <label htmlFor="serviceName">Service Name</label>
          <input
            type="text"
            className="form-control"
            id="serviceName"
            placeholder="Enter service name"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="serviceDescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="serviceDescription"
            placeholder="Enter service description"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="servicePrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="servicePrice"
            placeholder="Enter service price"
            required=""
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Add / Update Service
        </button>
      </form>
    </div>
  </div>
</>

  )
}
