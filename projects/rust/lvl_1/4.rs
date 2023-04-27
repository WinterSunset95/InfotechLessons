// WAP to print the total number of seconds in a given time

use std::io;

fn main() {
    let (mut hours, mut mins, mut secs, mut total_secs) = (0, 0, 0, 0);

    println!("Enter the time in the format HH:MM:SS: ");
    let mut time = String::new();
    io::stdin().read_line(&mut time).expect("Error reading input");
    let parts = time.split(":");
    let collection: Vec<&str> = parts.collect();
    let (hours, mins, secs) = (collection[0], collection[1], collection[2]);
    let hours: i32 = hours.trim().parse().expect("Error parsing variable 'hours'");
    let mins: i32 = mins.trim().parse().expect("Error parsing variable 'mins'");
    let secs: i32 = secs.trim().parse().expect("Error parsing variable 'secs'");
    total_secs = hours * 60 * 60 + mins * 60 + secs;
    println!("Total seconds: {}", total_secs);
}