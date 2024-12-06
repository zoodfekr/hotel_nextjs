import { NextResponse, NextRequest } from 'next/server'
import Room from '../models/room'

// دریافت تمام اتاق ها
export const allRooms = async (req, res) => {
  const rooms = await Room.find()
  return NextResponse.json({ len: rooms.length, data: rooms })
}

// دریافت یک اتاق

export const room = async (req, res) => {
  try {
    const roomid = req.query.id
    const room = await Room.findById(roomid)
    if (!room) {
      return NextResponse.json(
        { success: false, message: 'اتاقی با این شناسه پیدا نشد' },
        { status: 404 }
      )
    }
    return NextResponse.json({ success: true, data: room })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'خطایی رخ داده است' },
      { status: 500 }
    )
  }
}

// ساخت اتاق جدید
export const newRoom = async (req, res) => {
  const body = await req.json()
  const room = await Room.create(body)
  return NextResponse.json({ success: true, message: 'ذخیره شد' })
}
