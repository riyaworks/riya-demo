interface UserData{
    userId: String,
    name: String,
    userName: String,
    address?:address[],
    email: String,
    phoneNo: Number,
    pinCode: 313001,
    inActive: true,
    cart?: cart[],
    
}
interface address{
    address_1 : String,
    address_2: String,
    Address_3: String,
}
interface cart{
    cart_id: String,
    cart_name: String,
    quantity: String,
    price: String,
}
