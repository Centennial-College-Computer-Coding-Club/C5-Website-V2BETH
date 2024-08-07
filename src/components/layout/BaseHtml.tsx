export default function BaseHtml(props: {
	children?: JSX.Element | JSX.Element[];
}) {
	return (
		<html lang="en" class="bg-[#161616] text-white">
		<head>
			<meta charset="UTF-8"/>
			<meta
				name="viewport"
				content="width=device-width, user-sc00alable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
			/>
			<title> Document </title>
			<script src="/public/scripts/htmx2.0.1.min.js"></script>
			<script src="/public/scripts/footer-animation.js"></script>
			<script src="/public/scripts/mobile-menu.js"></script>
			<link rel="stylesheet" href="/public/styles.css"/>
			<link rel="icon" type="image/x-icon" href="/public/imgs/favicon.ico"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/public/imgs/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/public/imgs/favicon-16x16.png"/>
			<link rel="apple-touch-icon" sizes="180x180" href="/public/imgs/apple-touch-icon.png"/>
		</head>
		<body
			class="flex flex-col w-full h-screen items-center box-border p-2 font-['Roboto-Regular'] text-[#d9d9d9]">
				{props.children}
			</body>
		</html>
	);
}
