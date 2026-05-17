function car() {
    const vehicle = {
        brand: "Toyota",
        model: "Camry",
        available: true
    };
    
    return vehicle.available ? "This car is available" : "unavailable"; 
}

console.log(car()); 
