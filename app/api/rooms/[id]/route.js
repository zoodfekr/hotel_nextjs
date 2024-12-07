import { NextResponse, NextRequest } from 'next/server'
import { createEdgeRouter } from 'next-connect'

import { room } from '@/backend/controllers/roomControllers'
import dbConnect from '@/backend/config/dbConnect'

const router = createEdgeRouter()

dbConnect()
router.get(room)

export const GET = async (req, res) => {            
  return router.run(req, res)
}
