function printSentence(id, sentence, speed) {
  var index = 0,
      timer = setInterval(function() {
    var char= sentence.charAt(index);
    if(char === '<') index= sentence.indexOf('>',index);
    document.getElementById(id).innerHTML= sentence.substr(0,index);
    if(++index === sentence.length){
      clearInterval(timer);

    }
  }, speed);
} //printSentence

printSentence(
  'contentDiv',
   
   '<p class="subtitle is-2-mobile has-text-weight-bold"><strong"><i class="fas fa-info-circle" style="color: #1E90FF;font-size: 2rem;"></i> ABOUT</strong></p><p class="subtitle is-4-mobile">&#9898;Learned how to code in 2017 via <a href="http://opinto-opas-ops.metropolia.fi/index.php/en/tarjontakorit/en/52976">Open UAS studies</a> for personal advancement and out of curiosity.</p><p class="subtitle is-4-mobile">&#9898;Have a basic knowledge of building <a href="https://arnelimperial.github.io/jekyll-website/">website</a>.</p><p class="subtitle is-4-mobile">&#9898;Enthusiastic about the internet and technology in general.</p><p class="subtitle is-4-mobile">&#9898;Practice coding oftenly. All my technical know-how are still in basic level but am looking forward to level-up and improve.</p><p class="subtitle is-4-mobile">&#9898;Working as a Cook for 12 years and a former Research & Development Food Technologist.</p><p class="subtitle is-4-mobile">&#9898;Have plans to do coding/programming/developing as a career in the near future.</p><p class="subtitle is-4-mobile">&#9898;Get in touch by visiting my <a href="contact.html">contact page</a> or browse my <a href="resume.html">résumé/CV page</a>.</p><p class="subtitle is-4-mobile"><span class="w3-text-grey" style="font-size: 15px;"><i class="fas fa-envelope"></i> Arnel.Imperial@metropolia.fi </span></p><p class="subtitle is-4-mobile"><span class=" w3-text-grey" style="font-size: 15px;"><i class="fa fa-mobile-alt"></i> +358401646203</span></p><div style="border-bottom: 1px inset #FFA500;"></div>',

  5
);


//'<p class="subtitle is-2-mobile has-text-weight-bold" style="margin-left: -14px;"><i class="fas fa-info-circle" style="color: #1E90FF;"></i><strong> ABOUT</strong></p><p class="subtitle is-4-mobile"><span class="pointers">&#9675;</span>Learned how to code in 2017 via <a href="http://opinto-opas-ops.metropolia.fi/index.php/en/tarjontakorit/en/54456">Open UAS studies</a> for personal advancement and curiosity.</p><p class="subtitle is-4-mobile"><span class="pointers">&#9675;</span>Have a basic knowledge of building <a href="https://arnelimperial.github.io/jekyll-website/">website</a>.</p><p class="subtitle is-4-mobile"><span class="pointers">&#9675;</span>Enthusiastic about the internet and technology in general.</p><p class="subtitle is-4-mobile"><span class="pointers">&#9675;</span>Practice coding oftenly. All my technical know-how are still in basic level but am looking forward to level-up and improve.</p><p class="subtitle is-4-mobile"><span class="pointers">&#9675;</span>Working as a Cook for 12 years and a former Research & Development Food Technologist.</p><p class="subtitle is-4-mobile"><span class="pointers">&#9675;</span>Have plans to do coding/programming/developing as a career in the near future.</p><p class="subtitle is-4-mobile"><span class="pointers">&#9675;</span>Get in touch by visiting my <a href="/">contact page</a> or browse my <a href="/">résumé/CV page</a>.</p><div style="border-bottom: 1px inset #FFA500;"></div>',