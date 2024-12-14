import { NextResponse, NextRequest } from 'next/server'
import Room from '../models/room'

// دریافت تمام اتاق ها
export const allRooms = async req => {
  try {
    const rooms = await Room.find()
    return NextResponse.json({ len: rooms.length, data: rooms })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'خطایی رخ داده است' },
      { status: 500 }
    )
  }
}

// دریافت یک اتاق
export const room = async (req, { params }) => {
  try {
    const { id } = await params
    console.log('room id>> ', id)
    const room = await Room.findById(id)
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
export const newRoom = async req => {
  try {
    if (req.method !== 'POST') {
      return NextResponse.json(
        { success: false, message: 'روش درخواست نادرست است' },
        { status: 405 }
      )
    }
    const body = await req.json()
    const room = await Room.create(body)
    return NextResponse.json({ success: true, message: 'ذخیره شد' })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'خطایی رخ داده است' },
      { status: 500 }
    )
  }
}

// به روز رسانی اتاق
export const updateRoom = async (req, { params }) => {
  try {
    const { id } = params
    console.log('room id>> ', id)
    const room = await Room.findById(id)
    const body = await req.json()

    if (!room) {
      return NextResponse.json(
        { success: false, message: 'اتاقی با این شناسه پیدا نشد' },
        { status: 404 }
      )
    }
    const updatedRoom = await Room.findByIdAndUpdate(id, body, { new: true })

    return NextResponse.json({
      success: true,
      data: updatedRoom,
      message: 'به روز شد'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'خطایی در به روز رسانی رخ داده است' },
      { status: 500 }
    )
  }
}

// حذف یک اتاق
export const deleteRoom = async (req, { params }) => {
  try {
    const { id } = params
    console.log('room id>> ', id)

    const deletedRoom = await Room.findByIdAndDelete(id)
    if (!deletedRoom) {
      return NextResponse.json(
        { success: false, message: 'اتاقی با این شناسه پیدا نشد' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'حذف شد'
    })
  } catch (error) {
    console.error('Error deleting room:', error)
    return NextResponse.json(
      { success: false, message: 'خطایی رخ داده است' },
      { status: 500 }
    )
  }
}
