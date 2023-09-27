
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const textArea = document.getElementById('textArea');


const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = 'es-ES';
recognition.interimResult = false;

btnStart.addEventListener('click', () => {
    recognition.start();
});

btnStop.addEventListener('click', () => {
    recognition.abort();
});

recognition.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    textArea.value = texto;
    
    leerTexto(texto);
}

function leerTexto(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = 'es-ES'

    window.speechSynthesis.speak(speech);
}
rec.start();


function enviarComando() {
    
    const userInput = document.getElementById("textArea").value;
    const messages = document.getElementById("messages");
    const newMessage = document.createElement("div");
    newMessage.className = "message user";
    newMessage.textContent = "Tú: " + userInput;
    messages.appendChild(newMessage);

    const assistantResponse = responderComando(userInput);
    const newAssistantMessage = document.createElement("div");
    newAssistantMessage.className = "message assistant";
    newAssistantMessage.textContent = "Asistente: " + assistantResponse;
    messages.appendChild(newAssistantMessage);

    document.getElementById("textArea").value = "";
}

function responderComando(comando) {
    comando = comando.toLowerCase();

    if  (comando.includes("hola")){
    
   
        return "¡Hola!soy tu asistente ¿En qué puedo ayudarte?";
    
    } else if (comando.includes("hora")) {
        const hora = new Date().toLocaleTimeString();
        return "La hora actual es " + hora;

    } else if (comando.includes("fecha")) {
        const fecha = new Date().toLocaleDateString();
        return "La fecha actual es " + fecha;

    } else if (comando.includes("tiempo")) {
        // Puedes consultar una API de pronóstico del tiempo para obtener información actualizada
        return "esta haciondo un lindo dia"
    } else if (comando.includes("saludo")) {
        return "¡Hola! ¿Cómo estás?";
    } else if (comando.includes("despedida")) {
        return "Hasta luego. ¡Que tengas un buen día!";
    } else if (comando.includes("calcula")) {
        // Agrega lógica para realizar cálculos matemáticos
        try {
            const expresion = comando.replace("calcula", "").trim();
            const resultado = eval(expresion);
            return `El resultado es: ${resultado}`;
        } catch (error) {
            return "No pude calcular eso.";
        }
    }else if (comando.includes("spotify")) {
            // Puedes agregar una funcionalidad de búsqueda en línea aquí
            
            location.href ='https://open.spotify.com/search';

         
            
        }
        
        else if (comando.includes("busca")) {
            // Puedes agregar una funcionalidad de búsqueda en línea aquí
            
            location.href ='https://www.google.com';

        
        
            }else if (comando.includes("facebook")) {
                // Puedes agregar una funcionalidad de búsqueda en línea aquí
                
                location.href ='https://www.facebook.com/?stype=lo&deoia=1&jlou=AfejWwHX6rhW85HZ73Ow_5IaWZdHXkyF4P2FoLkTrxosKhcRS1bYDM1n0agLxeQrmUrRk2_XPKOT49VvcRPmo2xshfHaWL-19nYIEbXBlxdajQ&smuh=752&lh=Ac8-BoIMG4jNFQBEXzg';
    
            
            
                }else if (comando.includes("whatsapp")) {
                    // Puedes agregar una funcionalidad de búsqueda en línea aquí
                    
                    location.href ='https://web.whatsapp.com';
                
                
                    }else if (comando.includes("mapas")) {
                        // Puedes agregar una funcionalidad de búsqueda en línea aquí
                        
                        location.href ='https://www.google.com/maps/dir//36.704605,-4.459998/@36.704605,-4.459998,16z?hl=es-ES&entry=ttu';
                    
                    
                        }
                        else if (comando.includes("instagram")) {
                            // Puedes agregar una funcionalidad de búsqueda en línea aquí
                            
                            location.href ='https://www.instagram.com/?hl=es';
                        
                        
                            }
                            else if (comando.includes("youtube")) {
                                // Puedes agregar una funcionalidad de búsqueda en línea aquí
                                
                                location.href ='https://www.youtube.com';
                            
                            
                                }
                                else if (comando.includes("juego")) {
                                    // Puedes agregar una funcionalidad de búsqueda en línea aquí
                                    
                                    location.href ='C:\Users\USER\AppData\Roaming\Microsoft\Windows\Start Menu\Programs';
                                
                                
                                    }
            
            else {
                return "Lo siento, no entiendo ese comando.";
    }}rec.start();




