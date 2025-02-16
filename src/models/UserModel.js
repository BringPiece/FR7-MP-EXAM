export class UserModel {
  constructor(id, name, username, email, street, city, zipcode, lat, lng) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    this.lat = lat;
    this.lng = lng;
  }
}