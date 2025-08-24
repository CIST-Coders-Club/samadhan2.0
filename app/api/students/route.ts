import { NextResponse } from "next/server";

const students = [
  { id: 1, name: "Adarsh", age: 20, grade: "A" },
  { id: 2, name: "Danesh", age: 22, grade: "B" },
  { id: 3, name: "Sakshi", age: 21, grade: "A+" }
];
export async function GET() {
  return NextResponse.json(students);
}
