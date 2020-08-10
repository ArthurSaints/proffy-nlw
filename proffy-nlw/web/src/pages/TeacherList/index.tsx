import PageHeader from "../../components/PageHeader"
import React from 'react'
import './styles.css'
import TeacherItem from "../../components/TeacherItem"
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import Input from "../../components/Inputs"

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis:">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList