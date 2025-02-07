<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Meta tags untuk SEO -->
    <meta name="description" content="Dapatkan bantuan mengenai penggunaan e-Wallet Touch n Go di sini. Pelajari cara menggunakan aplikasi, mengisi saldo, dan manfaat lainnya.">
    <meta name="keywords" content="Bantuan, e-Wallet, Touch n Go, bantuan e-wallet, tutorial Touch n Go">
    <meta name="author" content="Nama Anda atau Nama Syarikat">
    <meta name="robots" content="index, follow">

    <!-- Meta tag untuk Open Graph (untuk media sosial seperti Facebook) -->
    <meta property="og:title" content="Bantuan e-Wallet Touch n Go">
    <meta property="og:description" content="Dapatkan maklumat lengkap tentang cara menggunakan e-Wallet Touch n Go, termasuk cara mengisi saldo dan memanfaatkan fitur lainnya.">
    <meta property="og:image" content="URL_TO_YOUR_IMAGE.jpg"> <!-- Gantikan dengan URL gambar thumbnail -->
    <meta property="og:url" content="https://e-walet.senaribantuanterkini.site"> <!-- Gantikan dengan URL laman web anda -->
    <meta property="og:type" content="website">

    <!-- Meta tag untuk Twitter -->
    <meta name="twitter:title" content="Bantuan e-Wallet Touch n Go">
    <meta name="twitter:description" content="Pelajari cara mengurus e-Wallet Touch n Go dengan mudah melalui panduan dan tip praktikal di laman web ini.">
    <meta name="twitter:image" content="URL_TO_YOUR_IMAGE.jpg"> <!-- Gantikan dengan URL gambar thumbnail -->
    <meta name="twitter:card" content="summary_large_image">
    <title>Claim Now Bantuan e-Wallet</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>