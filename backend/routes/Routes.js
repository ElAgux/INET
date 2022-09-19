import express from "express";
import {
    getObras, 
    getObraById,
    crearObra,
    editarObra,
    cambiarEstadoObra
} from "../controllers/obrasController.js";

import {
    getTiposObras, 
    getTipoObraById,
    crearTipoObra,
    editarTipoObra,
    cambiarEstadoTipoObra
} from "../controllers/tiposObrasController.js";

import {
	getAreas,
	getAreaById,
	crearArea,
	editarArea,
	cambiarEstadoArea
} from "../controllers/areasController.js";

import {
	getTiposAreas,
	getTipoAreaById,
	crearTipoArea,
	editarTipoArea,
	cambiarEstadoTipoArea
} from "../controllers/tiposAreasController.js";

import{
    crearVisitaGuiada,
    getVisitasGuiadas,
    getVisitasGuiadasPorIdioma
} from "../controllers/visitasGuiadasController.js"

import{
    crearIdiomaPorVisitaGuiada
} from "../controllers/idiomasPorVisitasGuiadasController.js"

import{
    getIdiomas
}from "../controllers/idiomasController.js"

import{
    crearVisitante
}from "../controllers/visitanteController.js"

import { LoginCon } from "../controllers/LoginControllers.js";
import { LoginYreg } from "../controllers/RegisterController.js";
const router = express.Router();

//get
router.get('/obras/:IdObra', getObraById);
router.get('/obras', getObras);
router.get('/tiposObras/:IdTipoObra', getTipoObraById);
router.get('/tiposObras', getTiposObras);
router.get('/areas/:IdArea', getAreaById);
router.get('/areas', getAreas);
router.get('/tiposAreas/:IdTipoArea', getTipoAreaById);
router.get('/tiposAreas', getTiposAreas);
router.get('/idiomas', getIdiomas);
router.get('/visitasGuiadas', getVisitasGuiadas);
router.get('/VisitasGuiadasPorIdioma/:IdIdioma', getVisitasGuiadasPorIdioma);


//post
router.post('/obras', crearObra)
router.post('/tiposObras', crearTipoObra)
router.post('/areas', crearArea)
router.post('/tiposAreas', crearTipoArea)
router.post('/visitasGuiadas', crearVisitaGuiada)
router.post('/idiomasPorVisitasGuiadas', crearIdiomaPorVisitaGuiada)
router.post('/visitante', crearVisitante)
router.post('/Register', LoginYreg);
router.post('/login', LoginCon);



//patch
router.patch('/obras/:IdObra', editarObra)
router.patch('/tiposObras/:IdObra', editarTipoObra)
router.patch('/areas/:IdArea', editarArea)
router.patch('/tiposAreas/:IdTipoArea', editarTipoArea)

export default router;