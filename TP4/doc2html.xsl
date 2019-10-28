<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="doc">
        <html>
            <head>
                <title>Sonetos</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1 align="center">Soneto</h1>
                <table>
                    <tr>
                        <th align="right">Província:</th><td><xsl:value-of select="prov"/></td>
                    </tr>
                    <tr>
                        <th align="right">Local:</th><td><xsl:value-of select="local"/></td>
                    </tr>
                    <tr>
                        <th align="right">Título:</th><td><xsl:value-of select="tit"/></td>
                    </tr>
                    <tr>
                        <th align="right">Músico:</th><td><xsl:value-of select="musico"/></td>
                    </tr>
                    <tr>
                        <th align="right">Observações:</th><td><xsl:value-of select="obs"/></td>
                    </tr>
                    <tr>
                        <th align="right">Ficheiro:</th><td><xsl:value-of select="file"/></td>
                    </tr>
                    <tr>
                        <th align="right">Tipo:</th><td><xsl:value-of select="file/@t"/></td>
                    </tr>
                    <tr>
                        <th align="right">Duração:</th><td><xsl:value-of select="duracao"/></td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>