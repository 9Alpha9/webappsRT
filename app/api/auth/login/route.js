import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Di sini Anda dapat menambahkan logika autentikasi yang sebenarnya
    // Contoh: verifikasi dengan database, JWT, dll.

    // Contoh validasi sederhana
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email dan password harus diisi" },
        { status: 400 }
      );
    }

    // Simulasi proses login berhasil
    return NextResponse.json({
      message: "Login berhasil",
      user: {
        email,
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
