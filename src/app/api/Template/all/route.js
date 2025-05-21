import dbConnect from "../../../../../lib/dbConnect";
import Template from "../../../../../Models/Template";


export async function GET(req) {
  try {
    await dbConnect();
    const templates = await Template.find();
    return new Response(JSON.stringify({
      success: true,
      result: templates
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
