// import Script from 'next/script';

interface Props {
  gtmId: string;
}

// const gtmScriptHead = (gtmId: string) => {
//   return `
//     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//     })(window,document,'script','dataLayer', ${gtmId});
//   `;
// };

// const GoogleTagManager = ({ gtmId }: Props) => {
//   return (
//     <Script
//       id='google-tag-manager'
//       strategy='afterInteractive'
//       dangerouslySetInnerHTML={{ __html: gtmScriptHead(gtmId) }}
//     />
//   );
// };

// export default GoogleTagManager;

const gtmScriptBody = (gtmId: string) => {
  return `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          `;
};

export const GoogleTagManagerBodyScript = ({ gtmId }: Props) => {
  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: gtmScriptBody(gtmId),
        }}
      />
    </>
  );
};

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P97JQ7TB"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->
