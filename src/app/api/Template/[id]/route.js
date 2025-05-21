// app/api/template/[id]/route.js

import dbConnect from "../../../../../lib/dbConnect";
import Template from "../../../../../Models/Template";



export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = req.url.split('/').pop();
  try {
    await dbConnect();
    const template = await Template.findById(id);

    if (!template) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Template not found'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      result: template
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Server Error',
      error: err.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
