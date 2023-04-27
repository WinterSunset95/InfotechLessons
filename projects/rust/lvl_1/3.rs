// WAP to calculate the area of a circle

use std::io;

fn main() {
    // Declare the variables we'll need
    let (mut r, mut area) = (String::new(), 0.0);

    // User input
    println!("Enter the radius of the circle: ");
    io::stdin().read_line(&mut r).expect("Error reading input");
    let radius: f32 = r.trim().parse().expect("Error parsing variable");
    area = radius * radius * 3.14;

    println!("The area of the circle is: {}", area);
}