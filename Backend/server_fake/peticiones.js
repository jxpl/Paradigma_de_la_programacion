//Este es la primer peticion y es con GET
var settings = {
  "url": "http://localhost:3000/Data",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la segunda peticion y es con POST
var settings = {
  "url": "http://localhost:3000/Data",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "11",
    "first_name": "Pablots",
    "last_name": "Rivera",
    "email": "Irmaduro00@patch.com",
    "gender": "Male",
    "ip_address": "35.7.143.226",
    "Department": "Services"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la tercera peticion y es con POST
var settings = {
  "url": "http://localhost:3000/Data",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "12",
    "first_name": "Estefa",
    "last_name": "Morales",
    "email": "Garrote25@patch.com",
    "gender": "Female",
    "ip_address": "86.2.976.862",
    "Department": "Engineering"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la cuarta peticion y es con POST
var settings = {
  "url": "http://localhost:3000/Data",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "13",
    "first_name": "Thomas",
    "last_name": "Rodriguez",
    "email": "parcero287@4shared.com",
    "gender": "Male",
    "ip_address": "62.6.385.156",
    "Department": "Support"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la quinta peticion y es con GET
var settings = {
  "url": "http://localhost:3000/Data",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la sexta peticion y es con DELETE
var settings = {
  "url": "http://localhost:3000/Data",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la septima peticion y es con DELETE
var settings = {
  "url": "http://localhost:3000/Data/8",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la octava peticion y es con DELETE
var settings = {
  "url": "http://localhost:3000/Data/6",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la novena peticion y es con PUT
var settings = {
  "url": "http://localhost:3000/Data/11",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "11",
    "first_name": "Pablo",
    "last_name": "Rodriguez",
    "email": "Irmaduro00@patch.com",
    "gender": "Male",
    "ip_address": "35.7.143.226",
    "Department": "Marketing"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esta es la decima peticion y es con PUT
var settings = {
  "url": "http://localhost:3000/Data/10",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": 10,
    "first_name": "Brittne",
    "last_name": "Purshouse",
    "email": "bpurshouse0@businesswire.com",
    "gender": "Female",
    "ip_address": "53.90.119.70",
    "Department": "Human Resources"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});