import { NextResponse, NextRequest } from 'next/server'
import { createEdgeRouter } from 'next-connect'

import { room, updateRoom } from '@/backend/controllers/roomControllers'
import dbConnect from '@/backend/config/dbConnect'

const router = createEdgeRouter()

dbConnect()
router.get(room)
router.put(updateRoom)

export const GET = async (req, res) => {            
  return router.run(req, res)
}
export const PUT = async (req, res) => {            
  return router.run(req, res)
}


