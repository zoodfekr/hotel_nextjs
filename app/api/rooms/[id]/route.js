import { NextResponse, NextRequest } from 'next/server'
import { createEdgeRouter } from 'next-connect'

import { allRooms, newRoom, room } from '@/backend/controllers/roomControllers'
import dbConnect from '@/backend/config/dbConnect'

const router = createEdgeRouter()

dbConnect()
router.get(allRooms)
router.get(room)
router.post(newRoom)

export const GET = async (req, res) => {            
  return router.run(req, res)
}
export const POST = async (req, res) => {
  return router.run(req, res)
}
