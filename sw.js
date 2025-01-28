importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"0c5cee2e59a34814129349ac920e218a","url":"contributors.html"},{"revision":"88f4b8f4b4f613e3c624ff3cbf3b8867","url":"feedback.html"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/aim.001.png"},{"revision":"902614d0ec73ebf4c79773bb5252d4f6","url":"images/fig1.jpg"},{"revision":"afa0d4d29a55b42e04fe57b262a2f947","url":"images/fig2.jpg"},{"revision":"9c4390fae84e7ec2d54ed29b2eed5c0b","url":"images/fig3.jpg"},{"revision":"a7cde08e43c42b845b21eedf80693380","url":"images/fig4.jpg"},{"revision":"9026b1ee1bde8a1404b69c9849ef259b","url":"images/fig5.jpg"},{"revision":"57223ce27aa5ce928de637c4b3416dc8","url":"images/fig6.jpg"},{"revision":"dd09c1ecaaf09810657b75d3c2916acf","url":"images/fig7.jpg"},{"revision":"ade7fcd14017de02262d16ab6dea0fa7","url":"images/fig8.jpg"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/procedure.001.png"},{"revision":"321c6d29e9e7d077c0c25a25a3ed711d","url":"images/procedure.002.png"},{"revision":"6df46684dd555f9c4d24c0d752c8de62","url":"images/procedure.003.png"},{"revision":"00c55d110fff26db2346b3982439155d","url":"images/procedure.004.png"},{"revision":"071f85323803aec2b740bc7ce477cc03","url":"images/procedure.005.png"},{"revision":"dac040e570bc7309c0bca791a4168751","url":"images/procedure.006.png"},{"revision":"9669b1ac08e3ee2f9e381321a9057d14","url":"images/procedure.007.png"},{"revision":"af2cfa4569772b65b15dcc9d231d1e13","url":"images/procedure.008.png"},{"revision":"b65f30580bb2996e8068da18b656cc89","url":"images/procedure.009.png"},{"revision":"5319c6fc439f045303bc66496e4388ec","url":"images/procedure.010.png"},{"revision":"1782d6828dda6261dea74377818af205","url":"images/step1.png"},{"revision":"c70f1171c60351cf8993ac3ab63cc530","url":"images/step2.png"},{"revision":"34239974f3562b8dd3d533e60d6c3398","url":"images/step3.png"},{"revision":"a6f448bb296087039676f677fec661e2","url":"images/step4.png"},{"revision":"38bbf27808ad1956dcf255b7c7471ec4","url":"images/theory.001.png"},{"revision":"7d902efe3ed11f1f95a2352ad125dc40","url":"images/theory.002.png"},{"revision":"eed71c1237d3e1774de7f34a6229c23c","url":"images/theory.003.png"},{"revision":"9b04f36f335f76ce857091547598e4d4","url":"images/theory.004.png"},{"revision":"5e8f32df1a9a81123de58a7fbd08b03c","url":"images/theory.005.png"},{"revision":"6aa4de1a3844a80ec53b7218a57e3245","url":"images/theory.006.png"},{"revision":"7528522c977b2946cb9da37534a2369f","url":"images/theory.007.png"},{"revision":"57f504f0f022cf12ece61f72257347e5","url":"images/theory.008.png"},{"revision":"a2b5af2972c3c60bec8aa90eed355816","url":"index.html"},{"revision":"9543e32848d8dcd6eab759799b9ca321","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"821918d5ce977f5aebef56d5d794f966","url":"posttest.html"},{"revision":"34c0247b45ab07c2e53e9f996700c1d6","url":"posttest.json"},{"revision":"d0f2710e830f2a494d42778de869f791","url":"pretest.html"},{"revision":"458573ebe94cecb0ed51cda059c7cf0b","url":"pretest.json"},{"revision":"ad781883035d029172f11d6c7e259843","url":"procedure.html"},{"revision":"7d123cca9ec3bf8bdc45eb057ae152d4","url":"references.html"},{"revision":"42caa7924b8fe326fe970e39f379a400","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"3d939e2ce8ee90f7afbc5d15bfa3c22f","url":"simulation/images/distribution.png"},{"revision":"ffcf1cf92b332322696f74ef6d3e2372","url":"simulation/images/grid.png"},{"revision":"dfe12c26b45fcda31516c2f2f02fc37f","url":"simulation/index.html"},{"revision":"a585a70da835d872becf02fe55b9c328","url":"simulation/js/activity1.js"},{"revision":"4ea7595c7227a85136910b5f657dc169","url":"simulation/js/activity2.js"},{"revision":"7f7c0cc018d164f55876329a577f8f6e","url":"simulation/js/activity3.js"},{"revision":"fbe4edb45fe4666f7f5270b1c6943c71","url":"simulation/js/data.js"},{"revision":"e3081cd3dd9b9ba4c057d4ea3f50f450","url":"simulation/js/gauss_ele.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"b8f9adff16a0832a331537334362d094","url":"simulation/js/trap.js"},{"revision":"2aada4797761a5ea1dc5cb703fadbdc8","url":"theory.html"},{"revision":"fefa74d523bd498861ed39d8b9e73ca3","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );