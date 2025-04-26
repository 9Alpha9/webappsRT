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

    // Simulasi proses login berhasil
    return NextResponse.json({
      message: "Login berhasil",
      user: {
        nik,
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
