import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    // Di sini Anda dapat menambahkan logika registrasi yang sebenarnya
    // Contoh: menyimpan ke database, validasi email unik, dll.

    // Contoh validasi sederhana
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Simulasi proses registrasi berhasil
    return NextResponse.json({
      message: "Registrasi berhasil",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
