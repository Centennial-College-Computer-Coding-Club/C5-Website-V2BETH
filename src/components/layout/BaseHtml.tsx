export default function BaseHtml(props: { children?: JSX.Element | JSX.Element[] }) {
    return (
        <html lang="en" class="bg-gray-900 text-white">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, user-sc00alable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <title> Document </title>
            <script src="/public/scripts/htmx2.0.1.min.js"></script>
            <link rel="stylesheet" href="/public/styles.css"/>
        </head>
        <body class="flex w-full h-screen justify-center items-center box-border">
            {props.children}
        </body>
        </html>
    );
}