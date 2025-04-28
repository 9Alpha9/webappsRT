import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { full_name, nik, handphone, address, email, password } =
      await request.json();

    if (!full_name || !email || !password) {
      return NextResponse.json(
        { message: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name,
          nik,
          handphone,
          address,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    // Simulasi proses registrasi berhasil
    return NextResponse.json({
      message: "Registrasi berhasil",
      user: {
        full_name,
        nik,
        handphone,
        address,
        email,
        password,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
