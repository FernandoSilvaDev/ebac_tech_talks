AOS.init();

const dataDoEvento = new Date("March 03, 2026 14:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date ();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
                 // mSec   min  hor  dia
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor (distanciaAteOEvento / diaEmMs); // Pegar as dias
    const horasAteOEvento = Math.floor ((distanciaAteOEvento % diaEmMs) / horaEmMs); //O simbolo '%' retorna o resto da divisão "/" Simbolo de divisão - Pegar as horas
    const minutosAteOEvento = Math.floor ((distanciaAteOEvento % horaEmMs) / minutoEmMs); // Pegar os minutos
    const segundosAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMs) / 1000);

                                    //innerHTML para escrever no HTML - Template screem `` - Adicionar o valor das variaveis usando ${}
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    //Menssagem quando contador é expirado.
    if (distanciaAteOEvento < 0) {
        clearInterval (contaAsHoras);
        document.getElementById ('contador').innerHTML = 'Evento expirado';
        document.getElementById ('contador').style.color = 'red';
        document.getElementById ('expirado').innerHTML = '';
    }

}, 1000);