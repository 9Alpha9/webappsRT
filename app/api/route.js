import { NextResponse } from "next/server";

// Konfigurasi base URL untuk Laravel API
const LARAVEL_API_URL =
  process.env.NEXT_PUBLIC_LARAVEL_API_URL || "http://localhost:8000/api";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    const url = queryString
      ? `${LARAVEL_API_URL}?${queryString}`
      : LARAVEL_API_URL;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Tambahkan header autentikasi jika diperlukan
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari Laravel API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(LARAVEL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Tambahkan header autentikasi jika diperlukan
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Gagal mengirim data ke Laravel API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      throw new Error("ID diperlukan untuk update data");
    }

    const response = await fetch(`${LARAVEL_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Tambahkan header autentikasi jika diperlukan
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Gagal mengupdate data di Laravel API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      throw new Error("ID diperlukan untuk menghapus data");
    }

    const response = await fetch(`${LARAVEL_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Tambahkan header autentikasi jika diperlukan
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Gagal menghapus data dari Laravel API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
