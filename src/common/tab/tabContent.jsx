import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import If from '../operator/if'


class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id
        const visible = this.props.tab.visible[this.props.id] // isso é um getAttribute do objeto visible. O que está dentro do colchete contém o nome do atributo do objeto
        return (
            <If test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}
const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)