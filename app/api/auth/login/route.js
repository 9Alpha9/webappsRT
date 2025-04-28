import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { nik, password } = await request.json();

    if (!nik || !password) {
      return NextResponse.json(
        { message: "Nik dan password harus diisi" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nik,
          password,
        }),
      }
    );

    const data = await response.json();

    // Simulasi proses login berhasil
    return NextResponse.json({
      message: "Login berhasil",
      user: {
        nik,
        password,
        name: "Contoh Pengguna",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
