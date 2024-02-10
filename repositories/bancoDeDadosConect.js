import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "postgres://oewvfpwv:IOedSOjvoyjzS1wEfSxsAW2qPkn_tSFj@ziggy.db.elephantsql.com/oewvfpwv",   
    {
        dialect: "postgres",								      
        define: {									       
            timestamps: false
        }
    }
)

export default sequelize