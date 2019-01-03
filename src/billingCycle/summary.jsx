import React, { Component } from 'react'
import Grid from '../common/layout/grid'
import Row from '../common/widget/row'
import ValueBox from '../common/widget/valueBox'
export default ({ credit, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`R$ ${Number(credit).toFixed(2)}`} text='Total de Créditos' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${Number(debt).toFixed(2)}`} text='Total de Débitos' />
                <ValueBox cols='12 4' color='blue' icon='money'
                    value={`R$ ${Number(credit - debt).toFixed(2)}`} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)