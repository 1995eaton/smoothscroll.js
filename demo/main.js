log = console.log.bind(console);

function addIpsum() {
  var ipsum = 'Lorem ipsum dolor sit amet, vel ut eripuit accusata, ei vim enim etiam denique, per te probo everti periculis. Nam ea omnis persequeris. Munere epicurei at qui, no dicat aperiri oporteat usu. Ius ut dico tacimates, malis voluptatum cu eum, quo nullam volutpat ex. Ne pri duis elitr causae, no cum fugit pertinacia. Oratio putant laoreet nam id.<br><br>Aliquip officiis cu sit. Sit eu errem aperiam erroribus. Eos cu facilis euripidis scribentur. Ad primis veritus complectitur eam, prima virtute eu cum, est an indoctum molestiae definiebas. Convenire evertitur mel te, ne iudico quaeque pri. Mel lucilius referrentur ea, sed veri accusata ex, imperdiet accommodare an sit.<br><br>Civibus officiis usu id, enim vidit vel ea, zril virtute appareat eu vel. Nobis doctus neglegentur vel ei, nam dictas aperiri inciderint ut. His cu tempor intellegebat, pro in utroque mandamus. Eam no nonumy legimus, elitr vocent iudicabit vis id.<br><br>Cu errem dicant sed, agam summo instructior est an, natum vituperata eu eos. Congue suavitate sit et, te nihil libris officiis mea. Vel dolor ornatus copiosae an, mei solum debitis ne. Falli fabulas has te, mei et reque dolorum democritum, vis feugait scaevola salutatus at. Ea vel reque noster, ea solet antiopam definiebas nam, ut putent appareat quaestio sea.<br><br>Putent commodo ad duo. Et usu adhuc corpora. Eu probo altera nec, vis illum nulla cu. Has ex scaevola inciderint, dicta dicam maiorum no sea. At altera pericula cum. Id aeque dicit eos, eos te vide quaeque, id est detracto expetenda.<br><br>';
  var pre = document.createElement('code');
  for (var i = 0; i < 50; i++) {
    pre.innerHTML += ipsum;
  }
  document.body.appendChild(pre);
  pre.style.position = 'absolute';
  pre.style.textAlign = 'left';
  pre.style.maxWidth = '900px';
  pre.style.left = window.innerWidth / 2 - pre.offsetWidth / 2 + 'px';
}

addIpsum();
