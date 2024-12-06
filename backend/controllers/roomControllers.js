import { NextResponse, NextRequest } from 'next/server'
import Room from '../models/room';

export const allRooms = async (req, res) => {
  return NextResponse.json({
    data: 'hello'
  })
}

export const newRoom = async (req, res) => {
  const body = await req.json();

  const room = await Room.create(body);

  return NextResponse.json({success:true , message:'ذخیره شد'})
}
