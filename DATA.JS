function padZero(value) {
    return value < 10 ? `0${value}` : value;
  }
  // Obtener la fecha actual (hoy)
  const fechaHoy = new Date();
  const fechaMañana =new Date(fechaHoy+1);

  // Formatear la fecha actual al formato "YYYY-MM-DD"
  const year = fechaHoy.getFullYear();
  const month = padZero(fechaHoy.getMonth() + 1);
  const day = padZero(fechaHoy.getDate());
  const fechaFormateada = `${year}-${month}-${day}`;

  document.getElementById('early').value = fechaFormateada;
  document.getElementById('late').value = fechaFormateada;

function convertirFechaHora(fechaHoraString) { 
    // Dividir la cadena en fecha y hora
    const [fecha, hora] = fechaHoraString.split(" ");
  
    // Formatear la fecha
    const fechaFormateada = fecha.replace(/-/g, "");
  
    // Formatear la hora
    const horaFormateada = hora.replace(/:/g, "");
  
    // Combinar fecha y hora formateadas
    const resultado = fechaFormateada + horaFormateada;
    return resultado;
  }

function run(){
//CAPTURA DE DATOS GENERALES
    var Vdominio = document.getElementById('dominio').value;
    var Vitinerario = document.getElementById('itinerario').value;
    var Vorigen = document.getElementById('origen').value;
    var Vearly = document.getElementById('early').value + ' ' + document.getElementById('earlytime').value;
    Vearly = convertirFechaHora(Vearly)+'00';
    var Vlate = document.getElementById('late').value + ' ' +document.getElementById('latetime').value;
    Vlate = convertirFechaHora(Vlate)+'00';
    var Vnamefile = document.getElementById('filename').value;
    console.log(Vdominio+' '+Vitinerario+' '+Vorigen+' '+Vearly+' '+Vlate+' '+Vnamefile);
    var header = "<?xml version='1.0' encoding='UTF-8'?> <otm:Transmission xmlns:otm='http://xmlns.oracle.com/apps/otm/transmission/v6.4' xmlns:gtm='http://xmlns.oracle.com/apps/gtm/transmission/v6.4'> <otm:TransmissionHeader/> <otm:TransmissionBody> "
    var footer = "</otm:TransmissionBody> </otm:Transmission> "
    var orBase = "<otm:GLogXMLElement> <otm:Release> <otm:ReleaseGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#xid</otm:Xid> </otm:Gid> </otm:ReleaseGid> <otm:TransactionCode>IU</otm:TransactionCode> <otm:ReleaseHeader> <otm:ReleaseMethodGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#config</otm:Xid> </otm:Gid> </otm:ReleaseMethodGid> <otm:TransportModeGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>TL_DEDICADO</otm:Xid> </otm:Gid> </otm:TransportModeGid> <otm:FixedItineraryGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#itinerario</otm:Xid> </otm:Gid> </otm:FixedItineraryGid> <otm:IsSplitAllowed>Y</otm:IsSplitAllowed> <otm:OrderPriority>1</otm:OrderPriority> </otm:ReleaseHeader> <otm:ShipFromLocationRef> <otm:LocationRef> <otm:LocationGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#origen</otm:Xid> </otm:Gid> </otm:LocationGid> </otm:LocationRef> </otm:ShipFromLocationRef> <otm:ShipToLocationRef> <otm:LocationRef> <otm:LocationGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#destino</otm:Xid> </otm:Gid> </otm:LocationGid> </otm:LocationRef> </otm:ShipToLocationRef> <otm:TimeWindow> <otm:EarlyPickupDt> <otm:GLogDate>#early</otm:GLogDate> <otm:TZId>America/Buenos_Aires</otm:TZId> <otm:TZOffset>-03:00</otm:TZOffset> </otm:EarlyPickupDt> <otm:LateDeliveryDt> <otm:GLogDate>#late</otm:GLogDate> <otm:TZId>America/Buenos_Aires</otm:TZId> <otm:TZOffset>-03:00</otm:TZOffset> </otm:LateDeliveryDt> </otm:TimeWindow> <otm:ReleaseLine> <otm:ReleaseLineGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#xid_1</otm:Xid> </otm:Gid> </otm:ReleaseLineGid> <otm:PackagedItemRef> <otm:PackagedItemGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#pi</otm:Xid> </otm:Gid> </otm:PackagedItemGid> </otm:PackagedItemRef> <otm:ItemQuantity> <otm:PackagedItemCount>#cantidad</otm:PackagedItemCount> </otm:ItemQuantity> <otm:TransportHandlingUnitRef> <otm:ShipUnitSpecRef> <otm:ShipUnitSpecGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#thu</otm:Xid> </otm:Gid> </otm:ShipUnitSpecGid> </otm:ShipUnitSpecRef> </otm:TransportHandlingUnitRef> <otm:IsSplitAllowed>Y</otm:IsSplitAllowed> </otm:ReleaseLine> <otm:ReleaseTypeGid> <otm:Gid> <otm:DomainName>#dominio</otm:DomainName> <otm:Xid>#tipoorden</otm:Xid> </otm:Gid> </otm:ReleaseTypeGid> </otm:Release> </otm:GLogXMLElement> "
//FIN CAPTURA DE DATOS GENERALES



//CAPTURA DE DATOS DE ORDENES
//ORDEN 1
    //CAPTURA
        var Vxid1 = document.getElementById('xid1').value.toUpperCase();
        var Vdestino1 = document.getElementById('destino1').value;
        var Vpi1 = document.getElementById('pi1').value;
        var Vcantidad1 = document.getElementById('cantidad1').value;
        var Vthu1 = document.getElementById('thu1').value;
        var VtipoDeOrden1 = document.getElementById('tipoDeOrden1').value;
        var Vconfig1 = document.getElementById('config1').value;
    //CREACION
        if(Vxid1==''){
            var or1 = '';
        } else{
            var or1 = orBase;
            or1 = or1.replace(/#dominio/g,Vdominio,"gi");
            or1 = or1.replace(/#itinerario/g,Vitinerario,"gi");
            or1 = or1.replace(/#origen/g,Vorigen,"gi");
            or1 = or1.replace(/#early/g,Vearly,"gi");
            or1 = or1.replace(/#late/g,Vlate,"gi");
            or1 = or1.replace(/#tipoorden/g,VtipoDeOrden1,"gi");
            or1 = or1.replace(/#config/g,Vconfig1,"gi");
            or1 = or1.replace(/#xid/g,Vxid1);
            or1 = or1.replace(/#destino/g,Vdestino1,"gi");
            or1 = or1.replace(/#pi/g,Vpi1,"gi");
            or1 = or1.replace(/#cantidad/g,Vcantidad1,"gi");
            or1 = or1.replace(/#thu/g,Vthu1,"gi");
        }

//ORDEN 2
    //CAPTURA
        var Vxid2 = document.getElementById('xid2').value.toUpperCase();
        var Vdestino2 = document.getElementById('destino2').value;
        var Vpi2 = document.getElementById('pi2').value;
        var Vcantidad2 = document.getElementById('cantidad2').value;
        var Vthu2 = document.getElementById('thu2').value;
        var VtipoDeOrden2 = document.getElementById('tipoDeOrden2').value;
        var Vconfig2 = document.getElementById('config2').value;
    //CREACION
        if(Vxid2==''){
            var or2 = '';
        } else{
            var or2 = orBase;
            or2 = or2.replace(/#dominio/g,Vdominio,"gi");
            or2 = or2.replace(/#itinerario/g,Vitinerario,"gi");
            or2 = or2.replace(/#origen/g,Vorigen,"gi");
            or2 = or2.replace(/#early/g,Vearly,"gi");
            or2 = or2.replace(/#late/g,Vlate,"gi");
            or2 = or2.replace(/#tipoorden/g,VtipoDeOrden2,"gi");
            or2 = or2.replace(/#config/g,Vconfig2,"gi");
            or2 = or2.replace(/#xid/g,Vxid2);
            or2 = or2.replace(/#destino/g,Vdestino2,"gi");
            or2 = or2.replace(/#pi/g,Vpi2,"gi");
            or2 = or2.replace(/#cantidad/g,Vcantidad2,"gi");
            or2 = or2.replace(/#thu/g,Vthu2,"gi");
        }

//ORDEN 3
            //CAPTURA
            var Vxid3 = document.getElementById('xid3').value.toUpperCase();
            var Vdestino3 = document.getElementById('destino3').value;
            var Vpi3 = document.getElementById('pi3').value;
            var Vcantidad3 = document.getElementById('cantidad3').value;
            var Vthu3 = document.getElementById('thu3').value;
            var VtipoDeOrden3 = document.getElementById('tipoDeOrden3').value;
            var Vconfig3 = document.getElementById('config3').value;
        //CREACION
            if(Vxid3==''){
                var or3 = '';
            } else{
                var or3 = orBase;
                or3 = or3.replace(/#dominio/g,Vdominio,"gi");
                or3 = or3.replace(/#itinerario/g,Vitinerario,"gi");
                or3 = or3.replace(/#origen/g,Vorigen,"gi");
                or3 = or3.replace(/#early/g,Vearly,"gi");
                or3 = or3.replace(/#late/g,Vlate,"gi");
                or3 = or3.replace(/#tipoorden/g,VtipoDeOrden3,"gi");
                or3 = or3.replace(/#config/g,Vconfig3,"gi");
                or3 = or3.replace(/#xid/g,Vxid3);
                or3 = or3.replace(/#destino/g,Vdestino3,"gi");
                or3 = or3.replace(/#pi/g,Vpi3,"gi");
                or3 = or3.replace(/#cantidad/g,Vcantidad3,"gi");
                or3 = or3.replace(/#thu/g,Vthu3,"gi");
            }

//ORDEN 4
    //CAPTURA
    var Vxid4 = document.getElementById('xid4').value.toUpperCase();
    var Vdestino4 = document.getElementById('destino4').value;
    var Vpi4 = document.getElementById('pi4').value;
    var Vcantidad4 = document.getElementById('cantidad4').value;
    var Vthu4 = document.getElementById('thu4').value;
    var VtipoDeOrden4 = document.getElementById('tipoDeOrden4').value;
    var Vconfig4 = document.getElementById('config4').value;
//CREACION
    if(Vxid4==''){
        var or4 = '';
    } else{
        var or4 = orBase;
        or4 = or4.replace(/#dominio/g,Vdominio,"gi");
        or4 = or4.replace(/#tipoorden/g,VtipoDeOrden4,"gi");
        or4 = or4.replace(/#config/g,Vconfig4,"gi");
        or4 = or4.replace(/#itinerario/g,Vitinerario,"gi");
        or4 = or4.replace(/#origen/g,Vorigen,"gi");
        or4 = or4.replace(/#early/g,Vearly,"gi");
        or4 = or4.replace(/#late/g,Vlate,"gi");
        or4 = or4.replace(/#xid/g,Vxid4);
        or4 = or4.replace(/#destino/g,Vdestino4,"gi");
        or4 = or4.replace(/#pi/g,Vpi4,"gi");
        or4 = or4.replace(/#cantidad/g,Vcantidad4,"gi");
        or4 = or4.replace(/#thu/g,Vthu4,"gi");
    }

//ORDEN 5
    //CAPTURA
    var Vxid5 = document.getElementById('xid5').value.toUpperCase();
    var Vdestino5 = document.getElementById('destino5').value;
    var Vpi5 = document.getElementById('pi5').value;
    var Vcantidad5 = document.getElementById('cantidad5').value;
    var Vthu5 = document.getElementById('thu5').value;
    var VtipoDeOrden5 = document.getElementById('tipoDeOrden5').value;
    var Vconfig5 = document.getElementById('config5').value;
//CREACION
    if(Vxid5==''){
        var or5 = '';
    } else{
        var or5 = orBase;
        or5 = or5.replace(/#dominio/g,Vdominio,"gi");
        or5 = or5.replace(/#tipoorden/g,VtipoDeOrden5,"gi");
        or5 = or5.replace(/#config/g,Vconfig5,"gi");
        or5 = or5.replace(/#itinerario/g,Vitinerario,"gi");
        or5 = or5.replace(/#origen/g,Vorigen,"gi");
        or5 = or5.replace(/#early/g,Vearly,"gi");
        or5 = or5.replace(/#late/g,Vlate,"gi");
        or5 = or5.replace(/#xid/g,Vxid5);
        or5 = or5.replace(/#destino/g,Vdestino5,"gi");
        or5 = or5.replace(/#pi/g,Vpi5,"gi");
        or5 = or5.replace(/#cantidad/g,Vcantidad5,"gi");
        or5 = or5.replace(/#thu/g,Vthu5,"gi");
    }

//ORDEN 6
    //CAPTURA
    var Vxid6 = document.getElementById('xid6').value.toUpperCase();
    var Vdestino6 = document.getElementById('destino6').value;
    var Vpi6 = document.getElementById('pi6').value;
    var Vcantidad6 = document.getElementById('cantidad6').value;
    var Vthu6 = document.getElementById('thu6').value;
    var VtipoDeOrden6 = document.getElementById('tipoDeOrden6').value;
    var Vconfig6 = document.getElementById('config6').value;
//CREACION
    if(Vxid6==''){
        var or6 = '';
    } else{
        var or6 = orBase;
        or6 = or6.replace(/#dominio/g,Vdominio,"gi");
        or6 = or6.replace(/#tipoorden/g,VtipoDeOrden6,"gi");
        or6 = or6.replace(/#config/g,Vconfig6,"gi");
        or6 = or6.replace(/#itinerario/g,Vitinerario,"gi");
        or6 = or6.replace(/#origen/g,Vorigen,"gi");
        or6 = or6.replace(/#early/g,Vearly,"gi");
        or6 = or6.replace(/#late/g,Vlate,"gi");
        or6 = or6.replace(/#xid/g,Vxid6);
        or6 = or6.replace(/#destino/g,Vdestino6,"gi");
        or6 = or6.replace(/#pi/g,Vpi6,"gi");
        or6 = or6.replace(/#cantidad/g,Vcantidad6,"gi");
        or6 = or6.replace(/#thu/g,Vthu6,"gi");
    }

//ORDEN 7
    //CAPTURA
    var Vxid7 = document.getElementById('xid7').value.toUpperCase();
    var Vdestino7 = document.getElementById('destino7').value;
    var Vpi7 = document.getElementById('pi7').value;
    var Vcantidad7 = document.getElementById('cantidad7').value;
    var Vthu7 = document.getElementById('thu7').value;
    var VtipoDeOrden7 = document.getElementById('tipoDeOrden7').value;
    var Vconfig7 = document.getElementById('config7').value;
//CREACION
    if(Vxid7==''){
        var or7 = '';
    } else{
        var or7 = orBase;
        or7 = or7.replace(/#dominio/g,Vdominio,"gi");
        or7 = or7.replace(/#tipoorden/g,VtipoDeOrden7,"gi");
        or7 = or7.replace(/#config/g,Vconfig7,"gi");
        or7 = or7.replace(/#itinerario/g,Vitinerario,"gi");
        or7 = or7.replace(/#origen/g,Vorigen,"gi");
        or7 = or7.replace(/#early/g,Vearly,"gi");
        or7 = or7.replace(/#late/g,Vlate,"gi");
        or7 = or7.replace(/#xid/g,Vxid7);
        or7 = or7.replace(/#destino/g,Vdestino7,"gi");
        or7 = or7.replace(/#pi/g,Vpi7,"gi");
        or7 = or7.replace(/#cantidad/g,Vcantidad7,"gi");
        or7 = or7.replace(/#thu/g,Vthu7,"gi");
    }

//ORDEN 8
    //CAPTURA
    var Vxid8 = document.getElementById('xid8').value.toUpperCase();
    var Vdestino8 = document.getElementById('destino8').value;
    var Vpi8 = document.getElementById('pi8').value;
    var Vcantidad8 = document.getElementById('cantidad8').value;
    var Vthu8 = document.getElementById('thu8').value;
    var VtipoDeOrden8 = document.getElementById('tipoDeOrden8').value;
    var Vconfig8 = document.getElementById('config8').value;
//CREACION
    if(Vxid8==''){
        var or8 = '';
    } else{
        var or8 = orBase;
        or8 = or8.replace(/#dominio/g,Vdominio,"gi");
        or8 = or8.replace(/#tipoorden/g,VtipoDeOrden8,"gi");
        or8 = or8.replace(/#config/g,Vconfig8,"gi");
        or8 = or8.replace(/#itinerario/g,Vitinerario,"gi");
        or8 = or8.replace(/#origen/g,Vorigen,"gi");
        or8 = or8.replace(/#early/g,Vearly,"gi");
        or8 = or8.replace(/#late/g,Vlate,"gi");
        or8 = or8.replace(/#xid/g,Vxid8);
        or8 = or8.replace(/#destino/g,Vdestino8,"gi");
        or8 = or8.replace(/#pi/g,Vpi8,"gi");
        or8 = or8.replace(/#cantidad/g,Vcantidad8,"gi");
        or8 = or8.replace(/#thu/g,Vthu8,"gi");
    }
    
//ORDEN 9
    //CAPTURA
    var Vxid9 = document.getElementById('xid9').value.toUpperCase();
    var Vdestino9 = document.getElementById('destino9').value;
    var Vpi9 = document.getElementById('pi9').value;
    var Vcantidad9 = document.getElementById('cantidad9').value;
    var Vthu9 = document.getElementById('thu9').value;
    var VtipoDeOrden9 = document.getElementById('tipoDeOrden9').value;
    var Vconfig9 = document.getElementById('config9').value;
//CREACION
    if(Vxid9==''){
        var or9 = '';
    } else{
        var or9 = orBase;
        or9 = or9.replace(/#dominio/g,Vdominio,"gi");
        or9 = or9.replace(/#tipoorden/g,VtipoDeOrden9,"gi");
        or9 = or9.replace(/#config/g,Vconfig9,"gi");
        or9 = or9.replace(/#itinerario/g,Vitinerario,"gi");
        or9 = or9.replace(/#origen/g,Vorigen,"gi");
        or9 = or9.replace(/#early/g,Vearly,"gi");
        or9 = or9.replace(/#late/g,Vlate,"gi");
        or9 = or9.replace(/#xid/g,Vxid9);
        or9 = or9.replace(/#destino/g,Vdestino9,"gi");
        or9 = or9.replace(/#pi/g,Vpi9,"gi");
        or9 = or9.replace(/#cantidad/g,Vcantidad9,"gi");
        or9 = or9.replace(/#thu/g,Vthu9,"gi");
    }

//ORDEN 10
    //CAPTURA
    var Vxid10 = document.getElementById('xid10').value.toUpperCase();
    var Vdestino10 = document.getElementById('destino10').value;
    var Vpi10 = document.getElementById('pi10').value;
    var Vcantidad10 = document.getElementById('cantidad10').value;
    var Vthu10 = document.getElementById('thu10').value;
    var VtipoDeOrden10 = document.getElementById('tipoDeOrden10').value;
    var Vconfig10 = document.getElementById('config10').value;
//CREACION
    if(Vxid10==''){
        var or10 = '';
    } else{
        var or10 = orBase;
        or10 = or10.replace(/#dominio/g,Vdominio,"gi");
        or10 = or10.replace(/#tipoorden/g,VtipoDeOrden10,"gi");
        or10 = or10.replace(/#config/g,Vconfig10,"gi");
        or10 = or10.replace(/#itinerario/g,Vitinerario,"gi");
        or10 = or10.replace(/#origen/g,Vorigen,"gi");
        or10 = or10.replace(/#early/g,Vearly,"gi");
        or10 = or10.replace(/#late/g,Vlate,"gi");
        or10 = or10.replace(/#xid/g,Vxid10);
        or10 = or10.replace(/#destino/g,Vdestino10,"gi");
        or10 = or10.replace(/#pi/g,Vpi10,"gi");
        or10 = or10.replace(/#cantidad/g,Vcantidad10,"gi");
        or10 = or10.replace(/#thu/g,Vthu10,"gi");
    }
//FIN CAPTURA DE DATOS DE ORDENES

//DESCARGA DE ARCHIVO
var nombreArchivo = Vnamefile+'.XML';
var contenido = header+or1+or2+or3+or4+or5+or6+or7+or8+or9+or10+footer;
const blob = new Blob([contenido], { type: "text/plain" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = nombreArchivo;
document.body.appendChild(a);
a.click();
URL.revokeObjectURL(url);
//FIN DESCARGA DE ARCHIVO
}

