// WAP to convert temperature from Farenheit to Centigrade. C=(F-32)*5/9

use std::io;

fn main() {
    let (mut F, mut C) = (String::new(), 0.0);
    println!("Enter the temperature in Farenheit: ");
    io::stdin().read_line(&mut F).expect("Error reading input");
    let F: f32 = F.trim().parse().expect("Error parsing variable 'F'");
    C = (F - 32.0) * 5.0 / 9.0;
    println!("{} degrees Farenheit = {} degrees Centigrade", F, C);
}