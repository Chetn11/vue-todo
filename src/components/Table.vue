<template>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company Type</th>
            <th>LLP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PAN</td>
            <td>Sub Cate</td>
            <td>abc</td>
          </tr>
          <tr>
            <td>Contact Number</td>
            <td>Industry</td>
            <td>Fashion</td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td>GST</td>
            <td>08ABCDFGHIJK1</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>Web Address</td>
            <td>www.ketanindustries.com</td>
          </tr>
          <tr>
            <td>CIN</td>
            <td>Registered Address</td>
            <td>House No. 23, Sector 143, New Delhi, Delhi, 110001</td>
          </tr>
          <tr>
            <td>Date of Incorporation</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "Ketan Honagekar",
        pan: "ABCDFGHIJK",
        contactNumber: "+91 9988776655",
        email: "abc@gmail.com",
        companyName: "Ketan Industries",
        cin: "ABCDFGIJKLMNOP",
        dateOfIncorporation: "12th July, 2016",
        companyType: "LLP",
        subCate: "Fill (232.5) x 40",
        industry: "Fashion",
        gst: "08ABCDFGHIJK1",
        webAddress: "www.ketanindustries.com",
        registeredAddress: "House No. 23, Sector 143, New Delhi, Delhi, 110001",
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #222;
    color: #fff;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
  }
  
  th,
  td {
    text-align: left;
    padding: 8px;
    border: 1px solid #fff;
  }
  
  th {
    background-color: #333;
  }
  
  td {
    background-color: #444;
  }
  </style>