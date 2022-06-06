function copyText() {

            /* Copy text into clipboard */
            navigator.clipboard.writeText
                ("devtools::install_github('gus-pendleton/doublr', build_vignettes=TRUE)");
            /* Change button value to Copied! */
            document.getElementById("myButton1").value="Copied!";
        }
