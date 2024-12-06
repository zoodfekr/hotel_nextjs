import { NextResponse, NextRequest } from 'next/server'

export const allRooms = async (req, res) => {
  return NextResponse.json({
    data: 'hello'
  })
}
