"use strict";document.addEventListener("page:loaded",function(){CONFIG.enableMath&&("undefined"==typeof MathJax?(window.MathJax={tex:{inlineMath:{"[+]":[["$","$"]]},tags:CONFIG.mathjax.tags},options:{renderActions:{insertedScript:[200,function(){document.querySelectorAll("mjx-container").forEach(function(t){t=t.parentNode;"li"===t.nodeName.toLowerCase()&&t.parentNode.classList.add("has-jax")})},"",!1]}}},NexT.utils.getScript(CONFIG.mathjax.js,{attributes:{defer:!0}})):(MathJax.startup.document.state(0),MathJax.typesetClear(),MathJax.texReset(),MathJax.typeset()))});